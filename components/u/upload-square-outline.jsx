import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k26ca1srb.css';
import '../../css/x/x58ix0ngu.css';
import '../../css/z/zuqh_gv5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k26ca1srb"/><path class="x58ix0ngu"/><path clip-rule="evenodd" class="zuqh_gv5l"/></g>`,
		"fallback": "solar:upload-square-outline",
	});
}

export default Component;
