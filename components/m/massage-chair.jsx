import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/axw7lr55v.css';
import '../../css/p/p1lghbcur.css';
import '../../css/q/qy_wc_bod.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="axw7lr55v"/><path class="p1lghbcur"/><path class="qy_wc_bod"/></g>`,
		"fallback": "icon-park-outline:massage-chair",
	});
}

export default Component;
