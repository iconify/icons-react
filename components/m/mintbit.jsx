import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxgvn8_0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxgvn8_0z"/>`,
		"fallback": "fa6-brands:mintbit",
	});
}

export default Component;
