import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc0zatbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc0zatbng"/>`,
		"fallback": "boxicons:search-filled",
	});
}

export default Component;
