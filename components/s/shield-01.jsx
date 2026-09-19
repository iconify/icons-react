import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp9y7rzvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp9y7rzvu"/>`,
		"fallback": "hugeicons:shield-01",
	});
}

export default Component;
