import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw_lpwbiy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw_lpwbiy"/>`,
		"fallback": "fa-solid:seedling",
	});
}

export default Component;
