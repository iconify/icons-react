import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf1m3kbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf1m3kbyt"/>`,
		"fallback": "mynaui:letter-t",
	});
}

export default Component;
