import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hfcnj25dk.css';
import '../../css/r/rg113dddb.css';
import '../../css/k/kj-k9st5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hfcnj25dk"/><path class="rg113dddb"/><path class="kj-k9st5r"/></g>`,
		"fallback": "icon-park-outline:romper",
	});
}

export default Component;
