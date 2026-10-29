import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m1_n6ki3n.css';
import '../../css/a/albw7qb1i.css';
import '../../css/f/f-k5oeq-j.css';
import '../../css/b/b1g1c3bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="m1_n6ki3n wm-k"/><path class="albw7qb1i wm-k"/><path class="f-k5oeq-j wm-a"/><path class="b1g1c3bqc wm-s"/></g>`,
		"fallback": "withicons:monitor-smartphone-blueprint",
	});
}

export default Component;
