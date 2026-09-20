import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qagtj4d3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qagtj4d3s"/>`,
		"fallback": "ix:user-pen",
	});
}

export default Component;
