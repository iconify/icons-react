import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sqp_44b0p.css';
import '../../css/y/y7zppqbne.css';
import '../../css/s/srj0fzbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sqp_44b0p"/><path class="y7zppqbne"/><path class="srj0fzbwg"/></g>`,
		"fallback": "hugeicons:user-square",
	});
}

export default Component;
