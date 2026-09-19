import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4hd_eb_y.css';
import '../../css/p/p6qruacqt.css';
import '../../css/h/h9diwtebh.css';
import '../../css/v/vwfxigb9l.css';
import '../../css/p/pyfi_9-vc.css';
import '../../css/l/lppeihwfk.css';
import '../../css/c/c0nd6ubad.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b4hd_eb_y"/><path class="p6qruacqt"/><rect class="h9diwtebh"/><rect class="vwfxigb9l"/><path class="pyfi_9-vc"/><path class="lppeihwfk"/><path class="c0nd6ubad"/></g>`,
		"fallback": "icon-park:switch-nintendo",
	});
}

export default Component;
