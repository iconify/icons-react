import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkz-oab5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkz-oab5u"/>`,
		"fallback": "withicons:refrigerator-gloss",
	});
}

export default Component;
