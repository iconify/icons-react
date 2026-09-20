import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiusxccnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yiusxccnr"/>`,
		"fallback": "solar:videocamera-add-outline",
	});
}

export default Component;
