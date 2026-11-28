import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p7ghfybbo.css';
import '../../css/q/qykraebyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p7ghfybbo secondary"/><path class="primary qykraebyy"/></g>`,
		"fallback": "iconaut:tape-measure-duotone",
	});
}

export default Component;
