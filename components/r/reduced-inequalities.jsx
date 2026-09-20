import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxpd0srql.css';
import '../../css/d/d1-j72ddq.css';
import '../../css/u/unx-l_b7d.css';
import '../../css/j/jbc_2sbjn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bxpd0srql"/><path class="d1-j72ddq"/><path class="unx-l_b7d"/><path class="jbc_2sbjn"/></g>`,
		"fallback": "streamline-color:reduced-inequalities",
	});
}

export default Component;
