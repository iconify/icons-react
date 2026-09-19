import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8455lb4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8455lb4s"/>`,
		"fallback": "fa6-solid:table-tennis-paddle-ball",
	});
}

export default Component;
