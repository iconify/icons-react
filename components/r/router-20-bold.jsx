import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvsq1_bmx.css';
import '../../css/d/daf0krbxp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvsq1_bmx"/><path class="daf0krbxp"/>`,
		"fallback": "energy-icons:router-20-bold",
	});
}

export default Component;
