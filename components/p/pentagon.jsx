import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/hjjpf1b1p.css';
import '../../css/z/zs_rnb_3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="hjjpf1b1p"/><path class="zs_rnb_3g"/></g>`,
		"fallback": "streamline-sharp-color:pentagon",
	});
}

export default Component;
