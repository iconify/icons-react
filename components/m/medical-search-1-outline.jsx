import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6zxgccaz.css';
import '../../css/l/la_6nmkfk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d6zxgccaz"/><path clip-rule="evenodd" class="la_6nmkfk"/></g>`,
		"fallback": "healthicons:medical-search-1-outline",
	});
}

export default Component;
