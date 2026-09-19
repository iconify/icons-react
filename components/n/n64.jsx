import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy32ckbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy32ckbmx"/>`,
		"fallback": "cbi:n64",
	});
}

export default Component;
