import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiy-tl0rx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiy-tl0rx"/>`,
		"fallback": "bi:three-dots-vertical",
	});
}

export default Component;
