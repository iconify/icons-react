import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuf4w3bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuf4w3bjs"/>`,
		"fallback": "iconoir:shield-alert",
	});
}

export default Component;
