import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioannv8yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioannv8yz"/>`,
		"fallback": "coolicons:utensils-round",
	});
}

export default Component;
