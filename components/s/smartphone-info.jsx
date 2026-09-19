import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqzy0acgw.css';

const viewBox = {"width":304,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqzy0acgw"/>`,
		"fallback": "zmdi:smartphone-info",
	});
}

export default Component;
