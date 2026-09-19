import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9kdxsbyj.css';
import '../../css/s/skl1w_bhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9kdxsbyj"/><path class="skl1w_bhf"/>`,
		"fallback": "ion:social-javascript-outline",
	});
}

export default Component;
