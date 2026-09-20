import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gx_ankb2q.css';
import '../../css/m/m12s1_esh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="gx_ankb2q"/><path class="m12s1_esh"/></g>`,
		"fallback": "marketeq:right-left-scroll-bar",
	});
}

export default Component;
