import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_vfulbig.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/hibe8qwor.css';
import '../../css/f/f-wf32bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l_vfulbig"/><g class="mc2zb0bvp"><path class="hibe8qwor"/><path class="f-wf32bmx"/></g></g>`,
		"fallback": "solar:waterdrops-bold-duotone",
	});
}

export default Component;
