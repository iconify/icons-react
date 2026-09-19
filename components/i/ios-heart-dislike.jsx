import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9tfbnbmz.css';
import '../../css/p/pmrsduv8z.css';
import '../../css/v/v5czncb5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9tfbnbmz"/><path class="pmrsduv8z"/><path class="v5czncb5r"/>`,
		"fallback": "ion:ios-heart-dislike",
	});
}

export default Component;
