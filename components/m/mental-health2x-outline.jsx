import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/swx8fsbua.css';
import '../../css/n/nmq3ynjwh.css';
import '../../css/s/sknk2ccfl.css';
import '../../css/v/v5e_qsmla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="swx8fsbua"/><path clip-rule="evenodd" class="nmq3ynjwh"/><path class="sknk2ccfl"/><path clip-rule="evenodd" class="v5e_qsmla"/></g>`,
		"fallback": "healthicons:mental-health2x-outline",
	});
}

export default Component;
