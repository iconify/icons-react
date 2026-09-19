import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2dnpkjjq.css';
import '../../css/z/z456xsbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2dnpkjjq"/><path class="z456xsbyc"/>`,
		"fallback": "circum:square-chev-up",
	});
}

export default Component;
