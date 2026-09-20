import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2g407byi.css';
import '../../css/m/m7wldfb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2g407byi"/><path class="m7wldfb3z"/>`,
		"fallback": "octicon:unread-24",
	});
}

export default Component;
