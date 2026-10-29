import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gwq6sk28r.css';
import '../../css/k/kgbn2cc9v.css';
import '../../css/h/h9urc9bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gwq6sk28r wm-a"/><path class="kgbn2cc9v"/><path class="h9urc9bth wm-a"/></g>`,
		"fallback": "withicons:waves",
	});
}

export default Component;
