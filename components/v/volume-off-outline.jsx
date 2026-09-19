import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m90aoem4n.css';
import '../../css/o/ojinh4u0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m90aoem4n"/><path class="ojinh4u0e"/>`,
		"fallback": "eva:volume-off-outline",
	});
}

export default Component;
