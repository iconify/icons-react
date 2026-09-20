import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl4dl26nv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl4dl26nv"/>`,
		"fallback": "keyline-icons:key-square-fill",
	});
}

export default Component;
