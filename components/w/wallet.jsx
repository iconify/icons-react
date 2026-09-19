import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0_uufb3i.css';
import '../../css/t/tn2_8hb1p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u0_uufb3i"/><path clip-rule="evenodd" class="tn2_8hb1p"/></g>`,
		"fallback": "gravity-ui:wallet",
	});
}

export default Component;
