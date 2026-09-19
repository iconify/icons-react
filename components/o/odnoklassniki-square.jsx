import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6_ibfb0f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6_ibfb0f"/>`,
		"fallback": "fa7-brands:odnoklassniki-square",
	});
}

export default Component;
