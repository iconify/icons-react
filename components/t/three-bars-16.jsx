import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amy3jaclb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amy3jaclb"/>`,
		"fallback": "octicon:three-bars-16",
	});
}

export default Component;
