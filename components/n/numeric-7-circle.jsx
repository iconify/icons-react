import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppv6zu5ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppv6zu5ky"/>`,
		"fallback": "mdi:numeric-7-circle",
	});
}

export default Component;
