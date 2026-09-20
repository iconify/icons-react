import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnxl3-vmf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnxl3-vmf"/>`,
		"fallback": "selfhst:selfh-st-dark",
	});
}

export default Component;
