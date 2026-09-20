import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er6yw3a_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er6yw3a_j"/>`,
		"fallback": "solar:paint-roller-broken",
	});
}

export default Component;
