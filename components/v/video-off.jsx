import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqopwnboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqopwnboo"/>`,
		"fallback": "mdi:video-off",
	});
}

export default Component;
