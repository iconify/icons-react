import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alh_6ac7v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alh_6ac7v"/>`,
		"fallback": "fa7-brands:stripe-s",
	});
}

export default Component;
