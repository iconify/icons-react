import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5o7o8bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5o7o8bjm"/>`,
		"fallback": "iconaut:shield-cog-solid",
	});
}

export default Component;
