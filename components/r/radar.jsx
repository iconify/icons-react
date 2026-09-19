import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/n/nxal037dx.css';
import '../../css/w/wbfltybql.css';
import '../../css/c/crac5rbvl.css';
import '../../css/o/o7bridc9g.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><path class="nxal037dx"/><path class="wbfltybql"/><path class="crac5rbvl"/><path class="o7bridc9g"/></g>`,
		"fallback": "gala:radar",
	});
}

export default Component;
