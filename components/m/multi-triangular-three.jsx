import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/os1b0yi3n.css';
import '../../css/m/mn_xh7wcg.css';
import '../../css/c/cpfti_bay.css';
import '../../css/g/gmzg_8bzq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="os1b0yi3n"/><path class="mn_xh7wcg"/><path class="cpfti_bay"/><path class="gmzg_8bzq"/></g>`,
		"fallback": "icon-park:multi-triangular-three",
	});
}

export default Component;
