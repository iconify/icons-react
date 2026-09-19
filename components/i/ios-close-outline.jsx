import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg35tlbum.css';
import '../../css/a/at_92mbzn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg35tlbum"/><path class="at_92mbzn"/>`,
		"fallback": "ion:ios-close-outline",
	});
}

export default Component;
