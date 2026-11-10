import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo0vohbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo0vohbzo"/>`,
		"fallback": "andrsrxn:text-overline",
	});
}

export default Component;
