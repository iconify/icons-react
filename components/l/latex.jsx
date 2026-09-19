import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfsz5_b2g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfsz5_b2g"/>`,
		"fallback": "cib:latex",
	});
}

export default Component;
