import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgm3asb6j.css';
import '../../css/p/pvkl0-bwn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgm3asb6j"/><path class="pvkl0-bwn"/>`,
		"fallback": "ion:ios-folder",
	});
}

export default Component;
