import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf9n4lb9d.css';
import '../../css/z/zdtpxix4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf9n4lb9d"/><circle class="zdtpxix4e"/>`,
		"fallback": "fxemoji:upperrightwhitecircle",
	});
}

export default Component;
