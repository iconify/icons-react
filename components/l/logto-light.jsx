import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx_-4nu-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx_-4nu-i"/>`,
		"fallback": "selfhst:logto-light",
	});
}

export default Component;
