import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgg9tabhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgg9tabhr"/>`,
		"fallback": "subway:paragraph-7",
	});
}

export default Component;
