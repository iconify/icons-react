import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n63lptb0i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n63lptb0i"/>`,
		"fallback": "fa7-brands:linkedin-in",
	});
}

export default Component;
