import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf59cilyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yf59cilyd"/>`,
		"fallback": "griddy-icons:label-off-filled",
	});
}

export default Component;
