import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufpb8bcvx.css';
import '../../css/f/f890v1bjh.css';
import '../../css/r/ras_6395g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ufpb8bcvx"/><path class="f890v1bjh"/><path class="ras_6395g"/></g>`,
		"fallback": "streamline-color:shield-check",
	});
}

export default Component;
