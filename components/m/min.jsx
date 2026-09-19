import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eruy9gp0e.css';
import '../../css/v/vl78f-rdv.css';
import '../../css/j/jwg0a0b6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="eruy9gp0e"/><path class="vl78f-rdv"/><path class="jwg0a0b6h"/></g>`,
		"fallback": "icon-park-outline:min",
	});
}

export default Component;
