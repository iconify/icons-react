import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_s9djx_l.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_s9djx_l"/>`,
		"fallback": "fa6-brands:shirtsinbulk",
	});
}

export default Component;
