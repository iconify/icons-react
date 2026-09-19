import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxy_h0r5a.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxy_h0r5a"/>`,
		"fallback": "zmdi:tag",
	});
}

export default Component;
