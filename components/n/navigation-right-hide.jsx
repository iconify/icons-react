import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6g0jxblk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p6g0jxblk"/>`,
		"fallback": "ix:navigation-right-hide",
	});
}

export default Component;
