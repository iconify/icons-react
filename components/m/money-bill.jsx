import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrdewibmm.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrdewibmm"/>`,
		"fallback": "fa6-solid:money-bill",
	});
}

export default Component;
