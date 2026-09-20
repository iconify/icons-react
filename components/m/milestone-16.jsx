import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fla4wtbkr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fla4wtbkr"/>`,
		"fallback": "octicon:milestone-16",
	});
}

export default Component;
