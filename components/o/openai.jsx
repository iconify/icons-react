import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2mbb37pm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2mbb37pm"/>`,
		"fallback": "fa7-brands:openai",
	});
}

export default Component;
