import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ioxb-qb6e.css';
import '../../css/d/dzgs_abuw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ioxb-qb6e"/><path class="dzgs_abuw"/></g>`,
		"fallback": "icon-park-outline:new-efferent",
	});
}

export default Component;
