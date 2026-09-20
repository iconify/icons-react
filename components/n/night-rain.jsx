import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk9_o78-e.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk9_o78-e"/>`,
		"fallback": "wi:night-rain",
	});
}

export default Component;
