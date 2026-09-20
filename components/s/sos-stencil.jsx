import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejwb0ubio.css';
import '../../css/w/whpncgbes.css';
import '../../css/k/kvpmxozen.css';
import '../../css/a/aufk1uq_n.css';
import '../../css/j/jnje3l14m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejwb0ubio"/><path class="whpncgbes"/><path class="kvpmxozen"/><path class="aufk1uq_n"/><path class="jnje3l14m"/>`,
		"fallback": "openmoji:sos-stencil",
	});
}

export default Component;
