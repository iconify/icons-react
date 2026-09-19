import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgbb3bemw.css';
import '../../css/u/uykx6e1uw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgbb3bemw"/><path class="uykx6e1uw"/>`,
		"fallback": "cil:text-shapes",
	});
}

export default Component;
