import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn2wu3b2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn2wu3b2o"/>`,
		"fallback": "fa6-brands:lyft",
	});
}

export default Component;
