import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_qq53ffi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_qq53ffi"/>`,
		"fallback": "simple-icons:uniqlo-ja",
	});
}

export default Component;
