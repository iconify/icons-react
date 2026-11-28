import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt70fpbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt70fpbkj"/>`,
		"fallback": "iconaut:tiktok-solid",
	});
}

export default Component;
