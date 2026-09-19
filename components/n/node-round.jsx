import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jzb6ijkjp.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/n/nhosxee-y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="jzb6ijkjp"/><circle class="tqb_6nb6c"/><path class="nhosxee-y"/></g>`,
		"fallback": "icon-park:node-round",
	});
}

export default Component;
