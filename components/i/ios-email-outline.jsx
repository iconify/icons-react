import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh_exqb_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh_exqb_y"/>`,
		"fallback": "ion:ios-email-outline",
	});
}

export default Component;
