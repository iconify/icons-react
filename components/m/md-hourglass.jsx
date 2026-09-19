import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvupsel1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvupsel1i"/>`,
		"fallback": "ion:md-hourglass",
	});
}

export default Component;
