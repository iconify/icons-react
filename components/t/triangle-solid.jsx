import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys601bc8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys601bc8u"/>`,
		"fallback": "iconaut:triangle-solid",
	});
}

export default Component;
