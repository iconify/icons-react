import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y5rk1qp1k.css';
import '../../css/z/zh3d8mv2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y5rk1qp1k"/><path class="zh3d8mv2f"/></g>`,
		"fallback": "hugeicons:pencil-edit-01",
	});
}

export default Component;
