import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-y1qabka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-y1qabka"/>`,
		"fallback": "selfhst:nextcloud-contacts-light",
	});
}

export default Component;
