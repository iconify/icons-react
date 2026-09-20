import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k9p9_3bur.css';
import '../../css/k/kvp-xabvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k9p9_3bur"/><path class="kvp-xabvc"/></g>`,
		"fallback": "reicon:more2-filled",
	});
}

export default Component;
