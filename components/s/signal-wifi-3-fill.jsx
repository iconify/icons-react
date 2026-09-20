import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipdg89bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipdg89bcn"/>`,
		"fallback": "ri:signal-wifi-3-fill",
	});
}

export default Component;
