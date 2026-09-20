import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg7-xdbod.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg7-xdbod"/>`,
		"fallback": "octicon:pin-16",
	});
}

export default Component;
