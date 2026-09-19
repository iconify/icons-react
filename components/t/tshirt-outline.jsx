import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyo1nlb1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyo1nlb1m"/>`,
		"fallback": "ion:tshirt-outline",
	});
}

export default Component;
