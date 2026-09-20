import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3bp1l9tp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3bp1l9tp"/>`,
		"fallback": "pinhead:person-boarding-transit-vehicle-with-destination-display-on-railway-track",
	});
}

export default Component;
