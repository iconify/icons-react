import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9xbwubme.css';
import '../../css/r/rjepksb1q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9xbwubme"/><path class="rjepksb1q"/>`,
		"fallback": "energy-icons:tide-high-48",
	});
}

export default Component;
