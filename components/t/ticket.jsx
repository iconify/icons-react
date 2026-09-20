import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jp6i8srxc.css';
import '../../css/u/u966ymbyk.css';
import '../../css/a/am7se9eaj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jp6i8srxc"/><path clip-rule="evenodd" class="u966ymbyk"/><path clip-rule="evenodd" class="am7se9eaj"/></g>`,
		"fallback": "pepicons-print:ticket",
	});
}

export default Component;
