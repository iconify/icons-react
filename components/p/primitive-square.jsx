import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j00zp6u7c.css';

const viewBox = {"width":8,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j00zp6u7c"/>`,
		"fallback": "octicon:primitive-square",
	});
}

export default Component;
