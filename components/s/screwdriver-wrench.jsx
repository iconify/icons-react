import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdo84dqsf.css';
import '../../css/p/ptfjfdcgn.css';
import '../../css/y/ycxup5_7u.css';
import '../../css/b/bfx-gtbim.css';
import '../../css/d/dl8n0r7ub.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cdo84dqsf"/><path class="ptfjfdcgn"/><path class="ycxup5_7u"/><path class="bfx-gtbim"/><path class="dl8n0r7ub"/></g>`,
		"fallback": "streamline-flex-color:screwdriver-wrench",
	});
}

export default Component;
