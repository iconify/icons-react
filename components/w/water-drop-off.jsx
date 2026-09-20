import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/ja90s6bgq.css';
import '../../css/b/bomzn_ltn.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="ja90s6bgq"/><path class="bomzn_ltn"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:water-drop-off",
	});
}

export default Component;
