import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oanunl3eu.css';
import '../../css/l/l42y8cc0u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oanunl3eu"/><path class="l42y8cc0u"/>`,
		"fallback": "garden:location-stroke-20",
	});
}

export default Component;
