import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/c1v5zsbsb.css';
import '../../css/x/x3id_abbj.css';
import '../../css/z/z9i26abnc.css';
import '../../css/m/mioa6bryd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="c1v5zsbsb"/><rect class="x3id_abbj"/><path class="z9i26abnc"/><path class="mioa6bryd"/></g>`,
		"fallback": "icon-park:network-drive",
	});
}

export default Component;
