import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihwhwwz8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihwhwwz8o"/>`,
		"fallback": "coolicons:ratio-21-9-duocolor-round",
	});
}

export default Component;
