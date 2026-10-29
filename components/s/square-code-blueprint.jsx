import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zj7-ibd4s.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/so7639bqv.css';
import '../../css/y/y2x2kobfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zj7-ibd4s"/><path class="cf3uzcrzx wm-deco"/><path class="so7639bqv wm-k"/><path class="wm-a y2x2kobfm"/></g>`,
		"fallback": "withicons:square-code-blueprint",
	});
}

export default Component;
