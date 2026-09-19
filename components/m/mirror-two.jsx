import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u20f8vsnm.css';
import '../../css/b/bvszfhbhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="u20f8vsnm"/><path class="bvszfhbhc"/></g>`,
		"fallback": "icon-park-outline:mirror-two",
	});
}

export default Component;
