import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bcywo5bhj.css';
import '../../css/u/u4uughbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bcywo5bhj"/><path class="u4uughbxt"/></g>`,
		"fallback": "hugeicons:store-add-02",
	});
}

export default Component;
