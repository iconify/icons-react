import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpkjnpb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpkjnpb3j"/>`,
		"fallback": "mdi:unlocked-check-outline",
	});
}

export default Component;
