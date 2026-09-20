import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yypun9-bb.css';
import '../../css/e/eugqk4bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yypun9-bb"/><path class="eugqk4bjh"/></g>`,
		"fallback": "keyline-icons:skip-forward-duotone",
	});
}

export default Component;
