import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5_0g-2pv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5_0g-2pv"/>`,
		"fallback": "fa6-solid:volleyball",
	});
}

export default Component;
