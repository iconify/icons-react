import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-ek1u2sb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-ek1u2sb"/>`,
		"fallback": "oui:token-interface",
	});
}

export default Component;
