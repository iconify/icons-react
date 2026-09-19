import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx1xxj1an.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx1xxj1an"/>`,
		"fallback": "icon-park-outline:ulikecam",
	});
}

export default Component;
