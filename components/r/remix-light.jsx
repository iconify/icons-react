import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw-9bxhcz.css';

const viewBox = {"width":256,"height":297};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw-9bxhcz"/>`,
		"fallback": "thesvg-color:remix-light",
	});
}

export default Component;
