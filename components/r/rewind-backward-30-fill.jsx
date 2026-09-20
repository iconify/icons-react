import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw26gsbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw26gsbaj"/>`,
		"fallback": "mingcute:rewind-backward-30-fill",
	});
}

export default Component;
