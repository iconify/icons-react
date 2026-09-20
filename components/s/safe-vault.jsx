import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5ly0gbwf.css';
import '../../css/u/u_h5xbc3p.css';
import '../../css/p/p4hn9vhms.css';
import '../../css/v/vfcefzb_m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n5ly0gbwf"/><path class="u_h5xbc3p"/><path class="p4hn9vhms"/><path class="vfcefzb_m"/></g>`,
		"fallback": "streamline-flex-color:safe-vault",
	});
}

export default Component;
