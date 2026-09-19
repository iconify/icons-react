import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knsr0lbgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knsr0lbgc"/>`,
		"fallback": "fa6-brands:sketch",
	});
}

export default Component;
