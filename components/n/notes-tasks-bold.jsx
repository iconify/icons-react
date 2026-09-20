import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlv74gbrp.css';
import '../../css/s/snocxdbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlv74gbrp"/><path class="snocxdbcp"/>`,
		"fallback": "streamline-ultimate:notes-tasks-bold",
	});
}

export default Component;
