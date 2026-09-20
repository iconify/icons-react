import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gttq0eb_y.css';
import '../../css/f/f_iutkbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gttq0eb_y"/><path class="f_iutkbbj"/>`,
		"fallback": "streamline-ultimate:love-it-break-bold",
	});
}

export default Component;
