import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvli3kbsk.css';
import '../../css/j/j2_5lrbxi.css';
import '../../css/p/pj0row0jd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvli3kbsk"/><path class="j2_5lrbxi"/><path class="pj0row0jd"/>`,
		"fallback": "energy-icons:kite-48-bold",
	});
}

export default Component;
