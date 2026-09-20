import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e38ojchyh.css';
import '../../css/c/c24svnd2a.css';
import '../../css/d/d1s63ybjv.css';
import '../../css/g/gvp4ae15o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e38ojchyh"/><path class="c24svnd2a"/><circle class="d1s63ybjv"/><circle class="gvp4ae15o"/></g>`,
		"fallback": "reicon:text-tool-filled",
	});
}

export default Component;
