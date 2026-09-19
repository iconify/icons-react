import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpwro45hd.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpwro45hd"/>`,
		"fallback": "fa-solid:italic",
	});
}

export default Component;
