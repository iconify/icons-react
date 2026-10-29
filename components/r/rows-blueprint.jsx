import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vcex7bbre.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/so7639bqv.css';
import '../../css/a/ae-e09b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vcex7bbre wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="so7639bqv wm-k"/><path class="ae-e09b3w wm-a"/></g>`,
		"fallback": "withicons:rows-blueprint",
	});
}

export default Component;
