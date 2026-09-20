import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow7mwmbfm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow7mwmbfm"/>`,
		"fallback": "ix:rotate",
	});
}

export default Component;
