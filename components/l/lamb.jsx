import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvvj__u4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvvj__u4o"/>`,
		"fallback": "token:lamb",
	});
}

export default Component;
