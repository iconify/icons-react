import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/os1b0yi3n.css';
import '../../css/k/krxe7cpzb.css';
import '../../css/g/g0wr9nbkg.css';
import '../../css/m/mvnib2b3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="os1b0yi3n"/><path class="krxe7cpzb"/><path class="g0wr9nbkg"/><path class="mvnib2b3e"/></g>`,
		"fallback": "icon-park:multi-triangular-four",
	});
}

export default Component;
