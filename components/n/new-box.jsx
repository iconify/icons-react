import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaisofb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaisofb_y"/>`,
		"fallback": "mdi:new-box",
	});
}

export default Component;
