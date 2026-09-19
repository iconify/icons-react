import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x09a6eefl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x09a6eefl"/>`,
		"fallback": "fa7-brands:page4",
	});
}

export default Component;
