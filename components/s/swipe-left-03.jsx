import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xak_anbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xak_anbgz"/>`,
		"fallback": "hugeicons:swipe-left-03",
	});
}

export default Component;
