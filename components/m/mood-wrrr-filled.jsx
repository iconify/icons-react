import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm37cc_9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm37cc_9p"/>`,
		"fallback": "tabler:mood-wrrr-filled",
	});
}

export default Component;
