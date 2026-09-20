import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dptxcnlku.css';
import '../../css/u/uzse2xbth.css';
import '../../css/k/k3_d2ccnw.css';
import '../../css/o/oa2rpaclt.css';
import '../../css/c/c132rpbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dptxcnlku"/><path clip-rule="evenodd" class="uzse2xbth"/><path class="k3_d2ccnw"/><path class="oa2rpaclt"/><path class="c132rpbaj"/></g>`,
		"fallback": "reicon:planet2",
	});
}

export default Component;
