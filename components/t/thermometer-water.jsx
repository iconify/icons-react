import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb_pa5bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb_pa5bnx"/>`,
		"fallback": "mdi:thermometer-water",
	});
}

export default Component;
