import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd8x7abdi.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd8x7abdi"/>`,
		"fallback": "ps:reddit",
	});
}

export default Component;
