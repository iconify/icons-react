import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/csv7r3b2q.css';
import '../../css/i/if54ilp2r.css';
import '../../css/b/b6qpo7bvh.css';
import '../../css/h/hat4q3btl.css';
import '../../css/j/jiwab4g6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="csv7r3b2q"/><path class="if54ilp2r"/><path class="b6qpo7bvh"/><path class="hat4q3btl"/><path class="jiwab4g6x"/></g>`,
		"fallback": "icon-park:school",
	});
}

export default Component;
