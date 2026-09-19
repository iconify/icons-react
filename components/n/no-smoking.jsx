import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iton6ra2f.css';
import '../../css/t/tgl287xkf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iton6ra2f"/><path class="tgl287xkf"/></g>`,
		"fallback": "foundation:no-smoking",
	});
}

export default Component;
