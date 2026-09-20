import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uissoqbib.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uissoqbib"/>`,
		"fallback": "pinhead:pickup-truck-under-taxi-checkerboard",
	});
}

export default Component;
