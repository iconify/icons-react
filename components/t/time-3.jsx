import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvdcm44zn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvdcm44zn"/>`,
		"fallback": "subway:time-3",
	});
}

export default Component;
