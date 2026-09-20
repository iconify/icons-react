import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flpk8vi4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flpk8vi4p"/>`,
		"fallback": "subway:round-arrow-5",
	});
}

export default Component;
