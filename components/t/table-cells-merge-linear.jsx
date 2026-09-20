import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r8vezthtv.css';
import '../../css/k/keqt0zbld.css';
import '../../css/z/zqgljtbnu.css';
import '../../css/l/lwxf4k-gy.css';
import '../../css/b/b2vvr6bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r8vezthtv"/><path class="keqt0zbld"/><path class="zqgljtbnu"/><path class="lwxf4k-gy"/><path class="b2vvr6bvh"/></g>`,
		"fallback": "solar:table-cells-merge-linear",
	});
}

export default Component;
