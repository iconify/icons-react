import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/d/dpa_uv29p.css';
import '../../css/w/wumg2q6qg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="dpa_uv29p"/><path class="wumg2q6qg"/></g>`,
		"fallback": "reicon:messages4",
	});
}

export default Component;
