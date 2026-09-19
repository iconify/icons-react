import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agn20jbrn.css';
import '../../css/r/r463ldb8d.css';
import '../../css/r/r5hdsivjz.css';
import '../../css/c/cz98s8cxn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="agn20jbrn"/><path class="r463ldb8d"/><path class="r5hdsivjz"/><path class="cz98s8cxn"/></g>`,
		"fallback": "pepicons:text-bubbles-print",
	});
}

export default Component;
