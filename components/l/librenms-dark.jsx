import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7vzaig-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7vzaig-r"/>`,
		"fallback": "selfhst:librenms-dark",
	});
}

export default Component;
