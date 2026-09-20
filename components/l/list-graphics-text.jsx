import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8331sb8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8331sb8p"/>`,
		"fallback": "ix:list-graphics-text",
	});
}

export default Component;
