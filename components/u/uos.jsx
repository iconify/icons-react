import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p13004bfj.css';
import '../../css/m/m79egobtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p13004bfj"/><path class="m79egobtu"/>`,
		"fallback": "token:uos",
	});
}

export default Component;
