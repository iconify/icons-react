import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9z1e5gbg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9z1e5gbg"/>`,
		"fallback": "ion:md-git-network",
	});
}

export default Component;
