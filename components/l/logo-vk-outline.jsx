import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrh53-k1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrh53-k1n"/>`,
		"fallback": "ion:logo-vk-outline",
	});
}

export default Component;
