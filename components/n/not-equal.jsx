import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgpy0vwps.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgpy0vwps"/>`,
		"fallback": "fa6-solid:not-equal",
	});
}

export default Component;
