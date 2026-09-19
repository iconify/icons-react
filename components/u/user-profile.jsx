import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae5jc82yp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae5jc82yp"/>`,
		"fallback": "carbon:user-profile",
	});
}

export default Component;
