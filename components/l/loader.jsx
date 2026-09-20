import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf0ymuc-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf0ymuc-d"/>`,
		"fallback": "keyline-icons:loader",
	});
}

export default Component;
