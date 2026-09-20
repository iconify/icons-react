import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lubrr7x8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lubrr7x8z"/>`,
		"fallback": "lineicons:snapchat",
	});
}

export default Component;
