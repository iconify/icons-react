import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfnwxgt6p.css';
import '../../css/c/c9p0p_5vn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfnwxgt6p"/><path class="c9p0p_5vn"/>`,
		"fallback": "devicon:trpc",
	});
}

export default Component;
