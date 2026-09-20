import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zki1cob0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zki1cob0m"/>`,
		"fallback": "mingcute:terminal-fill",
	});
}

export default Component;
