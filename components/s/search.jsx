import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c74wu66qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c74wu66qt"/>`,
		"fallback": "fontisto:search",
	});
}

export default Component;
