import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/glj9vcc1k.css';
import '../../css/x/x3bxksq_t.css';
import '../../css/d/dfmjv0mrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="glj9vcc1k"/><path class="x3bxksq_t"/><path class="dfmjv0mrp"/></g>`,
		"fallback": "withicons:music-2-duo",
	});
}

export default Component;
