import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0gdh4bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r0gdh4bxy"/>`,
		"fallback": "griddy-icons:maximize-alt-03",
	});
}

export default Component;
