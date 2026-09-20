import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrp2hqkul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrp2hqkul"/>`,
		"fallback": "thesvg-color:porkbun",
	});
}

export default Component;
