import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkh6_1xxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jkh6_1xxo"/>`,
		"fallback": "streamline-sharp:transfer-truck-time-remix",
	});
}

export default Component;
