import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y-xreybjk.css';
import '../../css/m/m9twe4b0l.css';
import '../../css/l/lldepnbza.css';
import '../../css/j/juu_gdcax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="y-xreybjk"/><path class="m9twe4b0l"/><path class="lldepnbza"/><path class="juu_gdcax"/></g>`,
		"fallback": "icon-park:open",
	});
}

export default Component;
