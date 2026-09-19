import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdtpx_b7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdtpx_b7v"/>`,
		"fallback": "game-icons:sword-mold",
	});
}

export default Component;
