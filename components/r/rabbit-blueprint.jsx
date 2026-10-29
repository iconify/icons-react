import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n5fnjzvzx.css';
import '../../css/d/d843ssbel.css';
import '../../css/e/e6g-47-tx.css';
import '../../css/j/j79vh-b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n5fnjzvzx wm-deco"/><path class="d843ssbel wm-deco"/><path class="e6g-47-tx wm-k"/><path class="j79vh-b8k wm-a"/></g>`,
		"fallback": "withicons:rabbit-blueprint",
	});
}

export default Component;
