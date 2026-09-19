import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ip3i1kbac.css';
import '../../css/b/b1c1gxmof.css';
import '../../css/w/wojuw_vqb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ip3i1kbac"/><path class="b1c1gxmof"/><path class="wojuw_vqb"/></g>`,
		"fallback": "icon-park-solid:scallion",
	});
}

export default Component;
