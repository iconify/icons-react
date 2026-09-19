import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lmtdu5d2v.css';
import '../../css/v/vbbpwe1sm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lmtdu5d2v"/><path class="vbbpwe1sm"/></g>`,
		"fallback": "icon-park-outline:two-ellipses",
	});
}

export default Component;
