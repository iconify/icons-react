import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxj0xs36a.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxj0xs36a"/>`,
		"fallback": "zmdi:star-circle",
	});
}

export default Component;
