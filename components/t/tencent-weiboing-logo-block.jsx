import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdpn0bcda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rdpn0bcda"/>`,
		"fallback": "streamline-logos:tencent-weiboing-logo-block",
	});
}

export default Component;
