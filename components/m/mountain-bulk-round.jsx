import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh3x8xafe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh3x8xafe"/>`,
		"fallback": "coolicons:mountain-bulk-round",
	});
}

export default Component;
