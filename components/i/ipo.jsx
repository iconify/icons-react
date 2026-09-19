import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/scmwpc35w.css';
import '../../css/u/u0xvi8j0t.css';
import '../../css/s/s6m7lrbta.css';
import '../../css/h/hlvne0q3y.css';
import '../../css/r/rlmc41bru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="scmwpc35w"/><path class="u0xvi8j0t"/><path class="s6m7lrbta"/><path class="hlvne0q3y"/><ellipse class="rlmc41bru"/></g>`,
		"fallback": "icon-park:ipo",
	});
}

export default Component;
