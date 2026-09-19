import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/einsz8zxl.css';
import '../../css/z/z9edi6b_u.css';
import '../../css/k/kd06ylh6g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="einsz8zxl"/><circle class="z9edi6b_u"/><circle class="kd06ylh6g"/></g>`,
		"fallback": "garden:overflow-fill-16",
	});
}

export default Component;
