import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6gwn9b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6gwn9b4l"/>`,
		"fallback": "mdi:iv-bag",
	});
}

export default Component;
