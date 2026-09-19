import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn9-vhbwr.css';

const viewBox = {"width":328,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn9-vhbwr"/>`,
		"fallback": "ps:pc",
	});
}

export default Component;
