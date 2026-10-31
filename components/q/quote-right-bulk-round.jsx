import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iugemnp2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iugemnp2s"/>`,
		"fallback": "coolicons:quote-right-bulk-round",
	});
}

export default Component;
