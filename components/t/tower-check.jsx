import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt_3x2brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt_3x2brf"/>`,
		"fallback": "iconoir:tower-check",
	});
}

export default Component;
