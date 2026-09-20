import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygh_68bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygh_68bzc"/>`,
		"fallback": "ri:menu-fold-2-line",
	});
}

export default Component;
