import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yox-1ubct.css';
import '../../css/w/wqshwfdjv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yox-1ubct"/><path class="wqshwfdjv"/>`,
		"fallback": "energy-icons:tidal-barrage-20-bold",
	});
}

export default Component;
