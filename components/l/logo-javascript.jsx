import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk-cdeb0g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk-cdeb0g"/>`,
		"fallback": "ion:logo-javascript",
	});
}

export default Component;
