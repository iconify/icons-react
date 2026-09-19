import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stiiw_f7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stiiw_f7b"/>`,
		"fallback": "carbon:unassigned-work-order",
	});
}

export default Component;
