import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbhfrjrke.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbhfrjrke"/>`,
		"fallback": "la:poll-h-solid",
	});
}

export default Component;
