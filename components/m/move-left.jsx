import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p3c9emb5y.css';
import '../../css/b/bgyfszbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p3c9emb5y"/><path class="bgyfszbsu"/></g>`,
		"fallback": "gg:move-left",
	});
}

export default Component;
