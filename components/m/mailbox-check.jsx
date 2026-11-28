import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aloe39qje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aloe39qje"/>`,
		"fallback": "noviair-light:mailbox-check",
	});
}

export default Component;
