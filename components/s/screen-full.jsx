import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9z9ypwvx.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9z9ypwvx"/>`,
		"fallback": "octicon:screen-full",
	});
}

export default Component;
