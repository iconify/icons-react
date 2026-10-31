import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gz9ugibkn.css';
import '../../css/t/tif1-g2no.css';
import '../../css/s/ssav-ia1y.css';
import '../../css/n/nr6bdlwuj.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gz9ugibkn"/><path class="tif1-g2no"/><path class="ssav-ia1y"/><path class="nr6bdlwuj"/></g>`,
		"fallback": "cif:mm",
	});
}

export default Component;
