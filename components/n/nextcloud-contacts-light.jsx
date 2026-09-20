import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6d9_xu_o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6d9_xu_o"/>`,
		"fallback": "selfhst:nextcloud-contacts-light",
	});
}

export default Component;
