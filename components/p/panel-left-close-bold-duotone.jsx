import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhosbdcvu.css';
import '../../css/t/t-_yyfhbn.css';
import '../../css/i/i32sc76-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vhosbdcvu"/><path class="t-_yyfhbn"/><path class="i32sc76-m"/></g>`,
		"fallback": "solar:panel-left-close-bold-duotone",
	});
}

export default Component;
