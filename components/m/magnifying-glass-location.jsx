import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_f3imouw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_f3imouw"/>`,
		"fallback": "fa7-solid:magnifying-glass-location",
	});
}

export default Component;
