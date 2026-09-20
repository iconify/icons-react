import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhsj9o-gd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xhsj9o-gd"/>`,
		"fallback": "ix:map-alt-3-filled",
	});
}

export default Component;
