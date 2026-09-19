import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/awv1y2bci.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/m/m9hp8-0cc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="awv1y2bci"/><circle class="tqb_6nb6c"/><path class="m9hp8-0cc"/></g>`,
		"fallback": "icon-park-outline:node-square",
	});
}

export default Component;
