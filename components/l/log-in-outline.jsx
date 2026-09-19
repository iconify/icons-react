import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gco9hqb4k.css';
import '../../css/o/ovur34-xv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gco9hqb4k"/><path class="ovur34-xv"/>`,
		"fallback": "famicons:log-in-outline",
	});
}

export default Component;
