import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htdwecomi.css';
import '../../css/a/a7pe4ku8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htdwecomi"/><path class="a7pe4ku8v"/>`,
		"fallback": "boxicons:timer-filled",
	});
}

export default Component;
