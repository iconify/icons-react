import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj9pw9bed.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj9pw9bed"/>`,
		"fallback": "energy-icons:minimize-20-bold",
	});
}

export default Component;
