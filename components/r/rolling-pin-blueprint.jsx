import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j_193vb6p.css';
import '../../css/s/sajxnbcjz.css';
import '../../css/u/ubjprya0p.css';
import '../../css/e/e3m3vlqeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="j_193vb6p wm-deco"/><path class="sajxnbcjz wm-deco"/><path class="ubjprya0p wm-deco"/><path class="e3m3vlqeq"/></g>`,
		"fallback": "withicons:rolling-pin-blueprint",
	});
}

export default Component;
