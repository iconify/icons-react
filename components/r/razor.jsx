import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lj8xgwb9t.css';
import '../../css/k/kooq7hlhc.css';
import '../../css/e/e814sabwa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="lj8xgwb9t"/><path class="kooq7hlhc"/><path class="e814sabwa"/></g>`,
		"fallback": "icon-park-outline:razor",
	});
}

export default Component;
