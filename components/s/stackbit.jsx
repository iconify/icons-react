import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt-hy4b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt-hy4b4l"/>`,
		"fallback": "thesvg-color:stackbit",
	});
}

export default Component;
