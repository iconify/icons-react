import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me4enybbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me4enybbk"/>`,
		"fallback": "mdi:shield-refresh-outline",
	});
}

export default Component;
