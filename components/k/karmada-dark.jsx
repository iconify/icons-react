import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvkhpwbij.css';

const viewBox = {"width":220.61,"height":173.65};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvkhpwbij"/>`,
		"fallback": "thesvg-color:karmada-dark",
	});
}

export default Component;
