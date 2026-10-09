import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqsm-5boy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqsm-5boy"/>`,
		"fallback": "energy-icons:wave-energy-converter-20-bold",
	});
}

export default Component;
