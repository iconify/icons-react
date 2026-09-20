import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns_i8fmkj.css';
import '../../css/c/cypjnfb0r.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns_i8fmkj"/><path class="cypjnfb0r"/>`,
		"fallback": "lineicons:lock",
	});
}

export default Component;
