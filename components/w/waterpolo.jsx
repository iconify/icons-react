import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/u/udenbrg5g.css';
import '../../css/k/k29hr_b1a.css';
import '../../css/w/wh3hmm8wf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="udenbrg5g"/><path class="k29hr_b1a"/><path class="wh3hmm8wf"/></g>`,
		"fallback": "icon-park-outline:waterpolo",
	});
}

export default Component;
