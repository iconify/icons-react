import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuzsnn-5g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuzsnn-5g"/>`,
		"fallback": "streamline-pixel:interface-essential-search-remove",
	});
}

export default Component;
