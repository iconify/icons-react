import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awpnglb-r.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awpnglb-r"/>`,
		"fallback": "fa6-solid:naira-sign",
	});
}

export default Component;
