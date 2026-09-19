import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl25jjb1d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl25jjb1d"/>`,
		"fallback": "bi:paypal",
	});
}

export default Component;
