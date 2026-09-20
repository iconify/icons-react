import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juzy3-jtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juzy3-jtq"/>`,
		"fallback": "pixelarticons:message-reply-solid",
	});
}

export default Component;
