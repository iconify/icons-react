import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqhdcmbrc.css';
import '../../css/a/aemqdzbdk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqhdcmbrc"/><path class="aemqdzbdk"/>`,
		"fallback": "energy-icons:map-pin-off-20-bold",
	});
}

export default Component;
