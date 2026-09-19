import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n83m5i-4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n83m5i-4m"/>`,
		"fallback": "fa6-solid:shield-halved",
	});
}

export default Component;
