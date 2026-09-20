import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6_shdyey.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f6_shdyey"/>`,
		"fallback": "streamline:ticket-1-solid",
	});
}

export default Component;
