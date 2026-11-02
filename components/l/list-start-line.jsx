import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycf1h_bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycf1h_bmp"/>`,
		"fallback": "mingcute:list-start-line",
	});
}

export default Component;
