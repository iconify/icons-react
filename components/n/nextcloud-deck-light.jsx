import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm066d1jb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm066d1jb"/>`,
		"fallback": "selfhst:nextcloud-deck-light",
	});
}

export default Component;
