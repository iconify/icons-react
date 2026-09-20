import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u966ymbyk.css';
import '../../css/a/am7se9eaj.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u966ymbyk"/><path clip-rule="evenodd" class="am7se9eaj"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:ticket-off",
	});
}

export default Component;
