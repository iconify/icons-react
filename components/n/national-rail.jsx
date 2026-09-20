import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3qhh86ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3qhh86ev"/>`,
		"fallback": "thesvg:national-rail",
	});
}

export default Component;
