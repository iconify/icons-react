import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbsttcp1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbsttcp1g"/>`,
		"fallback": "coolicons:package-plus-corner-fill-round",
	});
}

export default Component;
