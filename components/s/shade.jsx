import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lbebdjpjw.css';
import '../../css/g/gvnlxzqyt.css';
import '../../css/q/qp833-mnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lbebdjpjw"/><path class="gvnlxzqyt"/><path class="qp833-mnc"/></g>`,
		"fallback": "icon-park-outline:shade",
	});
}

export default Component;
