import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8zp1_bsn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8zp1_bsn"/>`,
		"fallback": "fa6-solid:triangle-exclamation",
	});
}

export default Component;
