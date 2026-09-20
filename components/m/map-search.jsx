import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wdkj3dj0e.css';
import '../../css/d/d1_-z3bdd.css';
import '../../css/c/c-cg5rb1w.css';
import '../../css/e/eeqpmubbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wdkj3dj0e"/><path class="d1_-z3bdd"/><path class="c-cg5rb1w"/><path class="eeqpmubbo"/></g>`,
		"fallback": "streamline-sharp-color:map-search",
	});
}

export default Component;
