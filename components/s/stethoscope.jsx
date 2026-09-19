import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/po_fz627w.css';
import '../../css/p/palkrnn0a.css';
import '../../css/q/qhd6hwb9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="po_fz627w"/><path class="palkrnn0a"/><path class="qhd6hwb9x"/></g>`,
		"fallback": "icon-park:stethoscope",
	});
}

export default Component;
