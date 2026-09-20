import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udgaq9por.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udgaq9por"/>`,
		"fallback": "reicon:sidebar-left2-filled",
	});
}

export default Component;
