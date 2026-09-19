import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iso-sy05t.css';
import '../../css/r/r2_2dlbjg.css';
import '../../css/l/l4y0xgwkr.css';
import '../../css/y/y19va-bzo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iso-sy05t"/><path class="r2_2dlbjg"/><circle class="l4y0xgwkr"/><path class="y19va-bzo"/></g>`,
		"fallback": "icon-park-outline:monitor-one",
	});
}

export default Component;
