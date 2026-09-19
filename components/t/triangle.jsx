import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5dvmebfl.css';

const viewBox = {"width":480,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5dvmebfl"/>`,
		"fallback": "ps:triangle",
	});
}

export default Component;
