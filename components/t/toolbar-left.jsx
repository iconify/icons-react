import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vw7i6zb1f.css';
import '../../css/p/p9ob_ie4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vw7i6zb1f"/><path clip-rule="evenodd" class="p9ob_ie4g"/></g>`,
		"fallback": "gg:toolbar-left",
	});
}

export default Component;
