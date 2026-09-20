import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyau3c7zj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyau3c7zj"/>`,
		"fallback": "la:phone-alt-solid",
	});
}

export default Component;
