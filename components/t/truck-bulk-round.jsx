import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a25oy8brj.css';
import '../../css/o/o_s21ac7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a25oy8brj"/><path class="o_s21ac7z"/></g>`,
		"fallback": "coolicons:truck-bulk-round",
	});
}

export default Component;
