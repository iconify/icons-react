import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huph7acow.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huph7acow"/>`,
		"fallback": "selfhst:optistack",
	});
}

export default Component;
