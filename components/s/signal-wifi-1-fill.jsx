import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5-36r0an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5-36r0an"/>`,
		"fallback": "ri:signal-wifi-1-fill",
	});
}

export default Component;
