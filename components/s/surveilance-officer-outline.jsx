import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h5vn5qz0x.css';
import '../../css/v/v_x350b_j.css';
import '../../css/n/ndwopbc4m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h5vn5qz0x"/><path class="v_x350b_j"/><path clip-rule="evenodd" class="ndwopbc4m"/></g>`,
		"fallback": "healthicons:surveilance-officer-outline",
	});
}

export default Component;
