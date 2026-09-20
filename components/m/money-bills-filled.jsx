import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o3wutab3g.css';
import '../../css/u/uivx2uhcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o3wutab3g"/><path clip-rule="evenodd" class="uivx2uhcs"/></g>`,
		"fallback": "reicon:money-bills-filled",
	});
}

export default Component;
