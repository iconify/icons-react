import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qslq46b1b.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qslq46b1b"/>`,
		"fallback": "file-icons:numpy",
	});
}

export default Component;
