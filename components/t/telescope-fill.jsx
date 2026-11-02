import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io4e73bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io4e73bhg"/>`,
		"fallback": "mingcute:telescope-fill",
	});
}

export default Component;
