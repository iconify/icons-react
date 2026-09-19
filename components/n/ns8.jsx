import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2_96kb9p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2_96kb9p"/>`,
		"fallback": "fa7-brands:ns8",
	});
}

export default Component;
