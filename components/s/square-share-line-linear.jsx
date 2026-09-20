import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/scc4a1b-n.css';
import '../../css/q/qprzy2b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="scc4a1b-n"/><path class="qprzy2b6i"/></g>`,
		"fallback": "solar:square-share-line-linear",
	});
}

export default Component;
