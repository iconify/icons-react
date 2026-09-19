import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxe01ac_z.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxe01ac_z"/>`,
		"fallback": "zmdi:palette",
	});
}

export default Component;
