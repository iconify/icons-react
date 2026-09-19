import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szpuq9bik.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szpuq9bik"/>`,
		"fallback": "f7:square-arrow-up-fill",
	});
}

export default Component;
