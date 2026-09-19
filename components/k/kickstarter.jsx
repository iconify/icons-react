import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um4t85bjt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um4t85bjt"/>`,
		"fallback": "fa7-brands:kickstarter",
	});
}

export default Component;
