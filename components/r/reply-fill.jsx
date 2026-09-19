import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-ng6dyja.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-ng6dyja"/>`,
		"fallback": "bi:reply-fill",
	});
}

export default Component;
