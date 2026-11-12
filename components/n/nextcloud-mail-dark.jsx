import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nickjxuqg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nickjxuqg"/>`,
		"fallback": "selfhst:nextcloud-mail-dark",
	});
}

export default Component;
