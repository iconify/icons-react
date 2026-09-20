import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noj5714vy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noj5714vy"/>`,
		"fallback": "thesvg-color:mixpanel",
	});
}

export default Component;
