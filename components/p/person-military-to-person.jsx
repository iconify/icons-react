import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb0b3q3bt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb0b3q3bt"/>`,
		"fallback": "fa6-solid:person-military-to-person",
	});
}

export default Component;
