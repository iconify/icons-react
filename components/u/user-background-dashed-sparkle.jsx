import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cjzv0-_9f.css';
import '../../css/e/ektua-b0m.css';
import '../../css/q/qk1z2_-4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cjzv0-_9f"/><path class="ektua-b0m"/><path class="qk1z2_-4p"/></g>`,
		"fallback": "andrsrxn:user-background-dashed-sparkle",
	});
}

export default Component;
