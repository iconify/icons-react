import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztl-s4l9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztl-s4l9s"/>`,
		"fallback": "bxl:redbubble",
	});
}

export default Component;
