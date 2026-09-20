import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgkwaib4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgkwaib4o"/>`,
		"fallback": "ri:mail-settings-fill",
	});
}

export default Component;
