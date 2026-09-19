import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rnklyrfrw.css';
import '../../css/d/descft7ip.css';
import '../../css/l/loci7j35h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rnklyrfrw"/><path class="descft7ip"/><path class="loci7j35h"/></g>`,
		"fallback": "icon-park:login",
	});
}

export default Component;
