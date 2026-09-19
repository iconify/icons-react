import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo6s7v_7r.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo6s7v_7r"/>`,
		"fallback": "fa6-brands:less",
	});
}

export default Component;
