import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/s/sfwevqhbk.css';
import '../../css/l/l88ucufld.css';
import '../../css/k/k6uzzitsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="sfwevqhbk"/><path class="l88ucufld"/><path class="k6uzzitsw"/></g>`,
		"fallback": "solar:receive-twice-square-bold-duotone",
	});
}

export default Component;
