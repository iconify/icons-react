import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w31fx27ee.css';
import '../../css/i/iorf4rbnv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w31fx27ee"/><path class="iorf4rbnv"/>`,
		"fallback": "energy-icons:pellet-boiler-48-bold",
	});
}

export default Component;
