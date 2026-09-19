import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lu5gjko1b.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lu5gjko1b"/>`,
		"fallback": "ps:tacos",
	});
}

export default Component;
