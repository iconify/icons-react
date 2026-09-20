import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wii5yeryb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wii5yeryb"/>`,
		"fallback": "ri:upload-2-fill",
	});
}

export default Component;
