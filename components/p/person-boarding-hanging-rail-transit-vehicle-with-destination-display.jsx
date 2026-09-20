import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej58xi1_p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej58xi1_p"/>`,
		"fallback": "pinhead:person-boarding-hanging-rail-transit-vehicle-with-destination-display",
	});
}

export default Component;
