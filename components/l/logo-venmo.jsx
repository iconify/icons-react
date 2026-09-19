import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-q2yr28x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-q2yr28x"/>`,
		"fallback": "ion:logo-venmo",
	});
}

export default Component;
