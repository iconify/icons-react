import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbr2hgbrt.css';
import '../../css/p/poslm8w5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bbr2hgbrt"/><path class="poslm8w5j"/></g>`,
		"fallback": "coolicons:table-plus-corner-bulk-round",
	});
}

export default Component;
