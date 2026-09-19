import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/itv3zkb-v.css';
import '../../css/v/vr4pazb5z.css';
import '../../css/l/lmmvibc1y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="itv3zkb-v"/><path class="vr4pazb5z"/><path class="lmmvibc1y"/></g>`,
		"fallback": "icon-park:sleep-one",
	});
}

export default Component;
