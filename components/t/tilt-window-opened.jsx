import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il6iivpjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il6iivpjm"/>`,
		"fallback": "cbi:tilt-window-opened",
	});
}

export default Component;
