import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/effjgp2eb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="effjgp2eb"/>`,
		"fallback": "pinhead:person-boarding-transit-vehicle-with-destination-display-on-railway-track-under-ground",
	});
}

export default Component;
