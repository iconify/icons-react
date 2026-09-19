import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j88t_ybxv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j88t_ybxv"/>`,
		"fallback": "fa7-brands:square-instagram",
	});
}

export default Component;
