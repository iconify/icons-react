import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj3eh0r6b.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj3eh0r6b"/>`,
		"fallback": "topcoat:next",
	});
}

export default Component;
