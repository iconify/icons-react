import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkdrb0b_z.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkdrb0b_z"/>`,
		"fallback": "ps:mobileme",
	});
}

export default Component;
