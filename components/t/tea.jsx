import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjvzrhymp.css';
import '../../css/n/n-lsx4-9n.css';
import '../../css/l/lkvl4_b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rjvzrhymp"/><path class="n-lsx4-9n"/><path class="lkvl4_b1a"/></g>`,
		"fallback": "andrsrxn:tea",
	});
}

export default Component;
