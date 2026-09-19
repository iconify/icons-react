import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqhk5lcyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqhk5lcyg"/>`,
		"fallback": "guidance:no-drug-or-substance",
	});
}

export default Component;
