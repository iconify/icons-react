import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd7xr87gt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd7xr87gt"/>`,
		"fallback": "streamline-logos:tinder-logo-solid",
	});
}

export default Component;
