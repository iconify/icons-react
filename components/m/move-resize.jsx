import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taul8bcbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taul8bcbc"/>`,
		"fallback": "mdi:move-resize",
	});
}

export default Component;
