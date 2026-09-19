import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7mdj_t3l.css';

const viewBox = {"width":581,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7mdj_t3l"/>`,
		"fallback": "fa-brands:r",
	});
}

export default Component;
