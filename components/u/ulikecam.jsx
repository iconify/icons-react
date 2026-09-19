import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd9390eio.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd9390eio"/>`,
		"fallback": "icon-park-solid:ulikecam",
	});
}

export default Component;
