import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enjks7vil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enjks7vil"/>`,
		"fallback": "selfhst:rclone-light",
	});
}

export default Component;
