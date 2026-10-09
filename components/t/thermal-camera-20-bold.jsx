import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1xd6acdc.css';
import '../../css/q/q_650fa-i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1xd6acdc"/><path class="q_650fa-i"/>`,
		"fallback": "energy-icons:thermal-camera-20-bold",
	});
}

export default Component;
