import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/ey246mh2m.css';
import '../../css/a/apivccbup.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ey246mh2m"/><path class="apivccbup"/></g>`,
		"fallback": "icon-park-outline:translate",
	});
}

export default Component;
