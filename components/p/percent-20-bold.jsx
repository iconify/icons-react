import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k52a32ocl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k52a32ocl"/>`,
		"fallback": "energy-icons:percent-20-bold",
	});
}

export default Component;
