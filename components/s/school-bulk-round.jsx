import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tjvqvqi7f.css';
import '../../css/k/kxclo-b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tjvqvqi7f"/><path class="kxclo-b8r"/></g>`,
		"fallback": "coolicons:school-bulk-round",
	});
}

export default Component;
