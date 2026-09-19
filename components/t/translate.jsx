import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_l2z6bml.css';

const viewBox = {"width":472,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_l2z6bml"/>`,
		"fallback": "zmdi:translate",
	});
}

export default Component;
