import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hec_imb9e.css';
import '../../css/o/og38x22ig.css';
import '../../css/z/zsmg9wb3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hec_imb9e"/><path class="og38x22ig"/><path class="zsmg9wb3c"/></g>`,
		"fallback": "at-icons:mouse",
	});
}

export default Component;
