import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz2mse9qz.css';
import '../../css/p/ph-b_-uai.css';
import '../../css/q/qdx0s-b4s.css';
import '../../css/x/x3x22ib9v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz2mse9qz"/><path class="ph-b_-uai"/><path class="qdx0s-b4s"/><path class="x3x22ib9v"/>`,
		"fallback": "energy-icons:soil-20",
	});
}

export default Component;
