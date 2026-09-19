import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4gmmqchl.css';
import '../../css/r/rhqsj1c8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="k4gmmqchl"/><path class="rhqsj1c8y"/>`,
		"fallback": "ion:mail-outline",
	});
}

export default Component;
