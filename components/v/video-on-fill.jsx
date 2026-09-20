import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb7l0mbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb7l0mbjr"/>`,
		"fallback": "ri:video-on-fill",
	});
}

export default Component;
