import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz9ek_b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz9ek_b7u"/>`,
		"fallback": "iconaut:video-off-solid",
	});
}

export default Component;
