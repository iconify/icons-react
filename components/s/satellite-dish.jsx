import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrck99bsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrck99bsv"/>`,
		"fallback": "fa-solid:satellite-dish",
	});
}

export default Component;
