import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2re4u90q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2re4u90q"/>`,
		"fallback": "ix:palette",
	});
}

export default Component;
