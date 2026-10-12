import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xdu9bfbqz.css';
import '../../css/c/coganlb0x.css';
import '../../css/s/sbvppdbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xdu9bfbqz"/><path class="coganlb0x"/><path class="sbvppdbyz"/></g>`,
		"fallback": "lucide-extended:tree-pine-duotone",
	});
}

export default Component;
