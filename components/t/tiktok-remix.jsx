import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcna6vb9x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcna6vb9x"/>`,
		"fallback": "streamline:tiktok-remix",
	});
}

export default Component;
