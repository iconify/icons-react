import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuz_mbbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuz_mbbgs"/>`,
		"fallback": "griddy-icons:receipt-filled",
	});
}

export default Component;
