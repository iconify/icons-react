import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgqtps_8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgqtps_8d"/>`,
		"fallback": "mynaui:panel-right-inactive",
	});
}

export default Component;
