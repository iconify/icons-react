import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixcdw3xng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixcdw3xng"/>`,
		"fallback": "coolicons:quote-right-duocolor-round",
	});
}

export default Component;
