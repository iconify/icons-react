import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-dao-bvt.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-dao-bvt"/>`,
		"fallback": "zmdi:long-arrow-return",
	});
}

export default Component;
