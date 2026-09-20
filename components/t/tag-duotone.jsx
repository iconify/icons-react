import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/drj_wnimu.css';
import '../../css/r/rfezp7b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="drj_wnimu"/><path class="rfezp7b8t"/></g>`,
		"fallback": "reicon:tag-duotone",
	});
}

export default Component;
