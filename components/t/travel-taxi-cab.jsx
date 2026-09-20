import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjrp9ib9d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjrp9ib9d"/>`,
		"fallback": "zondicons:travel-taxi-cab",
	});
}

export default Component;
