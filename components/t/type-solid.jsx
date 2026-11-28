import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz1yogb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz1yogb7w"/>`,
		"fallback": "iconaut:type-solid",
	});
}

export default Component;
