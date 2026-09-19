import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snfofybnw.css';
import '../../css/e/e6l3g5bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snfofybnw"/><path class="e6l3g5bzj"/>`,
		"fallback": "bx:message-alt-edit",
	});
}

export default Component;
