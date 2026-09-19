import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugg_ysbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugg_ysbyn"/>`,
		"fallback": "hugeicons:menu-collapse",
	});
}

export default Component;
