import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hry4lbbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hry4lbbin"/>`,
		"fallback": "hugeicons:vertical-scroll-point",
	});
}

export default Component;
