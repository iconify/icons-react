import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbnn0jbid.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbnn0jbid"/>`,
		"fallback": "zmdi:power-input",
	});
}

export default Component;
