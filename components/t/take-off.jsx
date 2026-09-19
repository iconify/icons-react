import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/os_gat7-a.css';
import '../../css/h/hnkvvsgay.css';
import '../../css/c/cew92he_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="os_gat7-a"/><path class="hnkvvsgay"/><path class="cew92he_y"/></g>`,
		"fallback": "icon-park:take-off",
	});
}

export default Component;
