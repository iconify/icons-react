import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbr2hgbrt.css';
import '../../css/x/xzpcydfzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bbr2hgbrt"/><path class="xzpcydfzu"/></g>`,
		"fallback": "coolicons:table-minus-corner-bulk-round",
	});
}

export default Component;
