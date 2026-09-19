import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn38p6dkb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn38p6dkb"/>`,
		"fallback": "foundation:social-xbox",
	});
}

export default Component;
