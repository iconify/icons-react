import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzt74d93r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzt74d93r"/>`,
		"fallback": "boxicons:toggle-big-right-filled",
	});
}

export default Component;
