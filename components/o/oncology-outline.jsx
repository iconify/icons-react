import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_78o9bzj.css';
import '../../css/h/h051dvbhs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v_78o9bzj"/><path class="h051dvbhs"/></g>`,
		"fallback": "healthicons:oncology-outline",
	});
}

export default Component;
