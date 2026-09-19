import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tatiy3bwz.css';
import '../../css/o/oqknzwbkc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tatiy3bwz"/><path class="oqknzwbkc"/>`,
		"fallback": "carbon:pricing-container",
	});
}

export default Component;
