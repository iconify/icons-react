import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3by9y91o.css';
import '../../css/p/pdn-wtbcg.css';
import '../../css/b/bdnkignkv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k3by9y91o"/><path class="pdn-wtbcg"/><path class="bdnkignkv"/></g>`,
		"fallback": "glyphs-poly:search-1-tint",
	});
}

export default Component;
