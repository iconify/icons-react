import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwo41-b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwo41-b-s"/>`,
		"fallback": "streamline-logos:twitter-logo-1",
	});
}

export default Component;
