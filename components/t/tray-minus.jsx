import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxuanebzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxuanebzt"/>`,
		"fallback": "mdi:tray-minus",
	});
}

export default Component;
