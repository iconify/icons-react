import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lpwj95bgh.css';
import '../../css/a/ayl8drpcr.css';
import '../../css/v/v4x6_8bfa.css';
import '../../css/y/yzwlj9a5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lpwj95bgh"/><path clip-rule="evenodd" class="ayl8drpcr"/><path class="v4x6_8bfa"/><path clip-rule="evenodd" class="yzwlj9a5z"/></g>`,
		"fallback": "healthicons:low-income-level-24px",
	});
}

export default Component;
