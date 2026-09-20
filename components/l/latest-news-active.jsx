import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu3bs6vzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tu3bs6vzm"/>`,
		"fallback": "nrk:latest-news-active",
	});
}

export default Component;
