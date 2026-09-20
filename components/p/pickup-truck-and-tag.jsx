import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtl3x1bac.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtl3x1bac"/>`,
		"fallback": "pinhead:pickup-truck-and-tag",
	});
}

export default Component;
