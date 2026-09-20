import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk_l8xbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk_l8xbpx"/>`,
		"fallback": "mynaui:panel-bottom-solid",
	});
}

export default Component;
