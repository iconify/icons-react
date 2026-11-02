import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xutzkd7bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xutzkd7bl"/>`,
		"fallback": "mingcute:rewind-backward-10-fill",
	});
}

export default Component;
