import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl151drgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl151drgk"/>`,
		"fallback": "thesvg-color:uplabs",
	});
}

export default Component;
