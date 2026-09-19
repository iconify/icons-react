import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpay17boa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpay17boa"/>`,
		"fallback": "fa7-solid:users-slash",
	});
}

export default Component;
