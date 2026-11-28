import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzkqyibmp.css';
import '../../css/g/g768bfbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzkqyibmp secondary"/><path class="g768bfbwz primary"/>`,
		"fallback": "iconaut:mouse-pointer-duo",
	});
}

export default Component;
