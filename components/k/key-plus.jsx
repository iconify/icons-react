import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5g458i_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5g458i_w"/>`,
		"fallback": "noviair-light:key-plus",
	});
}

export default Component;
