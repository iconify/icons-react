import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlx16osnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlx16osnd"/>`,
		"fallback": "thesvg-color:server-fault",
	});
}

export default Component;
