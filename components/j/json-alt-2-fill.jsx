import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n37j5cbjp.css';
import '../../css/f/frhwd_83g.css';
import '../../css/e/ez2fxmbdp.css';
import '../../css/b/b0d9-bbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n37j5cbjp"/><path class="frhwd_83g"/><path class="ez2fxmbdp"/><path clip-rule="evenodd" class="b0d9-bbaq"/>`,
		"fallback": "si:json-alt-2-fill",
	});
}

export default Component;
