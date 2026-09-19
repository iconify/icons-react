import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6-6hkbga.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6-6hkbga"/>`,
		"fallback": "fa7-solid:spa",
	});
}

export default Component;
