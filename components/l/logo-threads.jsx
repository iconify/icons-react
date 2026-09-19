import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzishqb7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzishqb7r"/>`,
		"fallback": "ion:logo-threads",
	});
}

export default Component;
