import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olol1g_ji.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olol1g_ji"/>`,
		"fallback": "system-uicons:minimise",
	});
}

export default Component;
