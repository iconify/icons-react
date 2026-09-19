import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb5_-u6mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb5_-u6mi"/>`,
		"fallback": "guidance:play-room",
	});
}

export default Component;
