import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhq0xobbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhq0xobbq"/>`,
		"fallback": "noviair-light:map-pins",
	});
}

export default Component;
