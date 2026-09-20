import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/era_8abct.css';
import '../../css/k/kauiapb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="era_8abct"/><path clip-rule="evenodd" class="kauiapb3i"/></g>`,
		"fallback": "nrk:magazine",
	});
}

export default Component;
