import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rzicbmbnz.css';
import '../../css/y/y_3o8ac5u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rzicbmbnz"/><path class="y_3o8ac5u"/></g>`,
		"fallback": "streamline:interface-edit-rotate-angle-rotate-angle-company-office-supplies-work",
	});
}

export default Component;
