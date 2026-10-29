import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/acgf497pn.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/so7639bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="acgf497pn wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="so7639bqv"/></g>`,
		"fallback": "withicons:square-blueprint",
	});
}

export default Component;
