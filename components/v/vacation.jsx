import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a73tdzbgv.css';
import '../../css/b/bx8_srscf.css';
import '../../css/g/g6995qb1j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="a73tdzbgv"/><path class="bx8_srscf"/><path class="g6995qb1j"/></g>`,
		"fallback": "icon-park:vacation",
	});
}

export default Component;
