import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb1elkbgg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb1elkbgg"/>`,
		"fallback": "selfhst:snapchat-light",
	});
}

export default Component;
