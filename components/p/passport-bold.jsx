import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu00t77rk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu00t77rk"/>`,
		"fallback": "pullo:passport-bold",
	});
}

export default Component;
