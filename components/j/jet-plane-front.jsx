import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7c_9fb8u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7c_9fb8u"/>`,
		"fallback": "pinhead:jet-plane-front",
	});
}

export default Component;
