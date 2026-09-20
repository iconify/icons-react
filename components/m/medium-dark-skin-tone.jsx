import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wusoxkb0r.css';
import '../../css/y/yu8tkqs3l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wusoxkb0r"/><path class="yu8tkqs3l"/>`,
		"fallback": "openmoji:medium-dark-skin-tone",
	});
}

export default Component;
