import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utvx-g6zo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utvx-g6zo"/>`,
		"fallback": "pinhead:pickup-truck-with-crates",
	});
}

export default Component;
