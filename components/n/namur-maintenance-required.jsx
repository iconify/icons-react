import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8_h0nxyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8_h0nxyu"/>`,
		"fallback": "ix:namur-maintenance-required",
	});
}

export default Component;
