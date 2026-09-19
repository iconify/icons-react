import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-s-nd_ay.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-s-nd_ay"/>`,
		"fallback": "fa6-solid:reply-all",
	});
}

export default Component;
