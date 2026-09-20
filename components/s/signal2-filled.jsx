import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjq2m9bbe.css';
import '../../css/d/d0khp7tap.css';
import '../../css/u/up0hn9bsq.css';
import '../../css/i/ij65pobku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qjq2m9bbe"/><path class="d0khp7tap"/><path class="up0hn9bsq"/><path class="ij65pobku"/></g>`,
		"fallback": "reicon:signal2-filled",
	});
}

export default Component;
