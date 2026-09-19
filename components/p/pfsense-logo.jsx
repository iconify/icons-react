import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv29q5vwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv29q5vwm"/>`,
		"fallback": "cbi:pfsense-logo",
	});
}

export default Component;
