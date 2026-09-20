import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjw4l9poi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjw4l9poi"/>`,
		"fallback": "selfhst:live-blog-light",
	});
}

export default Component;
