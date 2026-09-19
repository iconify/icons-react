import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd7uhfbwx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd7uhfbwx"/>`,
		"fallback": "garden:relationshape-chat-26",
	});
}

export default Component;
