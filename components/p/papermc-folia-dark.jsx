import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs-7npbrh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs-7npbrh"/>`,
		"fallback": "selfhst:papermc-folia-dark",
	});
}

export default Component;
