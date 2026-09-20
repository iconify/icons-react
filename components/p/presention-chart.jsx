import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/gzwvjpz8t.css';
import '../../css/v/v2du_qb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="gzwvjpz8t"/><path class="v2du_qb6v"/></g>`,
		"fallback": "reicon:presention-chart",
	});
}

export default Component;
