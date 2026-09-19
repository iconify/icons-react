import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0tl2y9kg.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0tl2y9kg"/>`,
		"fallback": "fa6-solid:money-check",
	});
}

export default Component;
