import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yypun9-bb.css';
import '../../css/y/yspugcb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yypun9-bb"/><path class="yspugcb-m"/></g>`,
		"fallback": "keyline-icons:skip-forward-two-tone",
	});
}

export default Component;
