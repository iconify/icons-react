import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snfofybnw.css';
import '../../css/x/x42zgxb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snfofybnw"/><path class="x42zgxb_w"/>`,
		"fallback": "bx:message-alt-x",
	});
}

export default Component;
