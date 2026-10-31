import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk_d2pbbf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk_d2pbbf"/>`,
		"fallback": "pinhead:person-walking-with-hiking-pole-wearing-backpack-in-eaved-gabled-building",
	});
}

export default Component;
