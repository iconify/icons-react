import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohll3yb-v.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohll3yb-v"/>`,
		"fallback": "zmdi:view-agenda",
	});
}

export default Component;
