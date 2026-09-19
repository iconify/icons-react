import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agtflua3y.css';
import '../../css/y/yahv79bgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agtflua3y"/><path class="yahv79bgw"/>`,
		"fallback": "boxicons:task",
	});
}

export default Component;
