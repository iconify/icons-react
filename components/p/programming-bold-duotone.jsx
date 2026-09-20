import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/r/r6f5l5b2l.css';
import '../../css/e/eyh5gf8py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="r6f5l5b2l"/><path class="eyh5gf8py"/></g>`,
		"fallback": "solar:programming-bold-duotone",
	});
}

export default Component;
