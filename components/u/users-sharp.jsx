import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zttqp7-6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zttqp7-6s"/>`,
		"fallback": "pixelarticons:users-sharp",
	});
}

export default Component;
