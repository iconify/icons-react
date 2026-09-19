import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4cw9ebxc.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4cw9ebxc"/>`,
		"fallback": "ps:machine-wash",
	});
}

export default Component;
