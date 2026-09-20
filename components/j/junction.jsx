import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih0p_rboa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih0p_rboa"/>`,
		"fallback": "temaki:junction",
	});
}

export default Component;
