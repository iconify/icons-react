import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk-6h0bhv.css';

const viewBox = {"width":472,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk-6h0bhv"/>`,
		"fallback": "zmdi:square-down",
	});
}

export default Component;
