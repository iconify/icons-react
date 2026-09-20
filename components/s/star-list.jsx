import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j056yo54b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j056yo54b"/>`,
		"fallback": "ix:star-list",
	});
}

export default Component;
