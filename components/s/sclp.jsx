import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i47aozb0e.css';
import '../../css/w/wcdq8xt5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i47aozb0e"/><path class="wcdq8xt5r"/>`,
		"fallback": "token:sclp",
	});
}

export default Component;
