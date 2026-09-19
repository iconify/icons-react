import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcoil0bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcoil0bua"/>`,
		"fallback": "bxs:magic-wand",
	});
}

export default Component;
