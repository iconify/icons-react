import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eluck1b_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eluck1b_x"/>`,
		"fallback": "selfhst:litlyx-light",
	});
}

export default Component;
