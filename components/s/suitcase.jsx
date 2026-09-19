import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qxafpgmcn.css';
import '../../css/t/tk-oksi2w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qxafpgmcn"/><path class="tk-oksi2w"/></g>`,
		"fallback": "bi:suitcase",
	});
}

export default Component;
