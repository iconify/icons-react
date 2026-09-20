import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf_p8zb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf_p8zb0o"/>`,
		"fallback": "tdesign:move",
	});
}

export default Component;
