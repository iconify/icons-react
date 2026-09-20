import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrax_sb8r.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrax_sb8r"/>`,
		"fallback": "lineicons:shift-right",
	});
}

export default Component;
