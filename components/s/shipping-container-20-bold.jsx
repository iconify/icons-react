import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pufjjdbwp.css';
import '../../css/j/j2maz60ge.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pufjjdbwp"/><path class="j2maz60ge"/>`,
		"fallback": "energy-icons:shipping-container-20-bold",
	});
}

export default Component;
