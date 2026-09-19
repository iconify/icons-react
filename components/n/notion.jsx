import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnjzp-box.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnjzp-box"/>`,
		"fallback": "fa7-brands:notion",
	});
}

export default Component;
