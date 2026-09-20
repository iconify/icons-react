import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iej9w3psn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iej9w3psn"/>`,
		"fallback": "thesvg-color:telefonica",
	});
}

export default Component;
