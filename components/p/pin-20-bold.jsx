import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1-q2fbul.css';
import '../../css/w/wz1m72y3c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1-q2fbul"/><path class="wz1m72y3c"/>`,
		"fallback": "energy-icons:pin-20-bold",
	});
}

export default Component;
