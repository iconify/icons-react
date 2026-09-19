import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uduft6fay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uduft6fay"/>`,
		"fallback": "ion:md-phone-landscape",
	});
}

export default Component;
