import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysqt9cbdy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysqt9cbdy"/>`,
		"fallback": "fa7-brands:npm",
	});
}

export default Component;
