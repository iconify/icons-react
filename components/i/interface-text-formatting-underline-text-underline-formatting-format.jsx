import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esy-x_8yt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esy-x_8yt"/>`,
		"fallback": "streamline:interface-text-formatting-underline-text-underline-formatting-format",
	});
}

export default Component;
