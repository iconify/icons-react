import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gys_s0bwt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gys_s0bwt"/>`,
		"fallback": "pinhead:map-pin-outline-with-dot",
	});
}

export default Component;
