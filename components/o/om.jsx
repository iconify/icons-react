import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p11hvf2oa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p11hvf2oa"/>`,
		"fallback": "fa6-solid:om",
	});
}

export default Component;
