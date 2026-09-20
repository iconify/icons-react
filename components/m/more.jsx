import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qcx76zaxv.css';
import '../../css/p/peiq2hfxm.css';
import '../../css/b/bgy1389lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="qcx76zaxv"/><circle class="peiq2hfxm"/><circle class="bgy1389lr"/></g>`,
		"fallback": "proicons:more",
	});
}

export default Component;
