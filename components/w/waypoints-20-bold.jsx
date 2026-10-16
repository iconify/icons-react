import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojxxti0kr.css';
import '../../css/m/mtxypiqix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojxxti0kr"/><path class="mtxypiqix"/>`,
		"fallback": "energy-icons:waypoints-20-bold",
	});
}

export default Component;
