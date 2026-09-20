import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5yc--bfz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5yc--bfz"/>`,
		"fallback": "pinhead:person-boarding-bus-with-destination-display-and-pantograph",
	});
}

export default Component;
