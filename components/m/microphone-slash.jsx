import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qthr_h6oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qthr_h6oz"/>`,
		"fallback": "sidekickicons:microphone-slash",
	});
}

export default Component;
