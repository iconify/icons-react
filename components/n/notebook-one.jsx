import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k5nb8o4wo.css';
import '../../css/b/bypdwpb_f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="k5nb8o4wo"/><path class="bypdwpb_f"/></g>`,
		"fallback": "icon-park-outline:notebook-one",
	});
}

export default Component;
