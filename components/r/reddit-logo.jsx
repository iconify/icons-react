import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdwt9o_ew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdwt9o_ew"/>`,
		"fallback": "ix:reddit-logo",
	});
}

export default Component;
