import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptp8j_z-g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptp8j_z-g"/>`,
		"fallback": "maki:lodging",
	});
}

export default Component;
