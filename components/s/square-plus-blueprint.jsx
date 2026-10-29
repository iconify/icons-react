import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hz6-zcb5z.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/so7639bqv.css';
import '../../css/m/mylmw0bop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hz6-zcb5z wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="so7639bqv wm-k"/><path class="mylmw0bop wm-a"/></g>`,
		"fallback": "withicons:square-plus-blueprint",
	});
}

export default Component;
