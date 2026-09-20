import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k1ypc5qnl.css';
import '../../css/g/gfxpmb_5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="k1ypc5qnl"/><path class="gfxpmb_5q"/></g>`,
		"fallback": "keyline-icons:package-plus-sharp-fill",
	});
}

export default Component;
