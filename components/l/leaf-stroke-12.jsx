import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5gc8fbdo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5gc8fbdo"/>`,
		"fallback": "garden:leaf-stroke-12",
	});
}

export default Component;
