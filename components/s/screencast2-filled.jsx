import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ifz1emj1w.css';
import '../../css/g/gs4xb9brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ifz1emj1w"/><path class="gs4xb9brh"/></g>`,
		"fallback": "reicon:screencast2-filled",
	});
}

export default Component;
