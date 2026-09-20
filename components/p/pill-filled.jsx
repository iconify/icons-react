import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv6cmwe8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv6cmwe8q"/>`,
		"fallback": "reicon:pill-filled",
	});
}

export default Component;
