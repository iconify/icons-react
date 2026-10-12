import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u96b__bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u96b__bac"/>`,
		"fallback": "andrsrxn:subset-proper-of",
	});
}

export default Component;
