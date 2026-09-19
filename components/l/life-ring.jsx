import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knl4x1tqf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knl4x1tqf"/>`,
		"fallback": "fa6-regular:life-ring",
	});
}

export default Component;
