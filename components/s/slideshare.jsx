import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k31-o_b6b.css';

const viewBox = {"width":424,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k31-o_b6b"/>`,
		"fallback": "zmdi:slideshare",
	});
}

export default Component;
