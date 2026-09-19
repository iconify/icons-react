import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/iqr7dvb-s.css';
import '../../css/q/qq-___vax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="iqr7dvb-s"/><path class="qq-___vax"/></g>`,
		"fallback": "icon-park:take-off-one",
	});
}

export default Component;
