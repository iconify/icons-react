import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am3o8ac5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am3o8ac5z"/>`,
		"fallback": "struq:slash",
	});
}

export default Component;
