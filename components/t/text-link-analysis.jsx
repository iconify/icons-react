import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5zc53bhn.css';
import '../../css/o/otd0eoc4d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5zc53bhn"/><path class="otd0eoc4d"/>`,
		"fallback": "carbon:text-link-analysis",
	});
}

export default Component;
