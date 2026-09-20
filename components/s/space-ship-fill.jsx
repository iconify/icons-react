import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu2zf6bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu2zf6bcn"/>`,
		"fallback": "ri:space-ship-fill",
	});
}

export default Component;
