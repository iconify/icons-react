import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/le5yt4b0l.css';
import '../../css/b/bw076156z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="le5yt4b0l"/><path class="bw076156z"/></g>`,
		"fallback": "hugeicons:pie-chart",
	});
}

export default Component;
