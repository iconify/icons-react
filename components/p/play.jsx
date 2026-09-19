import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdojnbc8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdojnbc8m"/>`,
		"fallback": "akar-icons:play",
	});
}

export default Component;
