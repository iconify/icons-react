import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wya9wt90b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wya9wt90b"/>`,
		"fallback": "entypo:price-tag",
	});
}

export default Component;
