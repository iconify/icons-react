import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qc0hdx2pm.css';
import '../../css/u/u0od4-lfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qc0hdx2pm"/><path class="u0od4-lfi"/></g>`,
		"fallback": "icon-park-solid:party-balloon",
	});
}

export default Component;
