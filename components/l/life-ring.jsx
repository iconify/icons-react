import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai4n-dk5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai4n-dk5c"/>`,
		"fallback": "fa6-solid:life-ring",
	});
}

export default Component;
