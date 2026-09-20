import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy9v6jbrr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fy9v6jbrr"/>`,
		"fallback": "streamline:smiley-mask-solid",
	});
}

export default Component;
