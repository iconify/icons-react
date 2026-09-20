import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdwzv5bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdwzv5bvt"/>`,
		"fallback": "mdi:venmo",
	});
}

export default Component;
