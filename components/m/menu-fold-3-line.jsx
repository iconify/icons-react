import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy9yn_biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy9yn_biv"/>`,
		"fallback": "ri:menu-fold-3-line",
	});
}

export default Component;
