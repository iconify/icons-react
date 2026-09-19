import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_h4tsf_v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_h4tsf_v"/>`,
		"fallback": "fa7-brands:product-hunt",
	});
}

export default Component;
