import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apfifgb3l.css';

const viewBox = {"width":704,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apfifgb3l"/>`,
		"fallback": "whh:usb",
	});
}

export default Component;
