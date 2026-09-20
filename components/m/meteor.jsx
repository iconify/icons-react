import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrr6p3bdr.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrr6p3bdr"/>`,
		"fallback": "wi:meteor",
	});
}

export default Component;
