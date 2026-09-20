import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk-asnz8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk-asnz8q"/>`,
		"fallback": "ri:subway-line",
	});
}

export default Component;
