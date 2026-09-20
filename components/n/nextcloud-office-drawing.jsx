import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htmjl2bnx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htmjl2bnx"/>`,
		"fallback": "selfhst:nextcloud-office-drawing",
	});
}

export default Component;
