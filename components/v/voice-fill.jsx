import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr5nhmbcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr5nhmbcw"/>`,
		"fallback": "mingcute:voice-fill",
	});
}

export default Component;
