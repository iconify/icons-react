import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sv2-ifb9o.css';
import '../../css/c/c_9qampbu.css';
import '../../css/l/lrbzgybpa.css';
import '../../css/v/v22g9sbjr.css';
import '../../css/d/dccbhi0dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sv2-ifb9o wm-shadow"/><path class="c_9qampbu"/><path class="lrbzgybpa"/><path class="v22g9sbjr"/><path class="dccbhi0dx"/></g>`,
		"fallback": "withicons-retro:microwave",
	});
}

export default Component;
