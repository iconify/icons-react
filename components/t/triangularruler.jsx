import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff_8p9-to.css';
import '../../css/e/e8au8db-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff_8p9-to"/><path class="e8au8db-s"/>`,
		"fallback": "fxemoji:triangularruler",
	});
}

export default Component;
