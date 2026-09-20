import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znb_hqckm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znb_hqckm"/>`,
		"fallback": "mynaui:paint-solid",
	});
}

export default Component;
