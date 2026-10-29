import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x--7w3b9a.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/so7639bqv.css';
import '../../css/j/jmo57ab0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco x--7w3b9a"/><path class="cf3uzcrzx wm-deco"/><path class="so7639bqv wm-k"/><path class="jmo57ab0a wm-a"/></g>`,
		"fallback": "withicons:square-x-blueprint",
	});
}

export default Component;
