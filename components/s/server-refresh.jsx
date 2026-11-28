import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx-8u-k7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx-8u-k7s"/>`,
		"fallback": "noviair-light:server-refresh",
	});
}

export default Component;
