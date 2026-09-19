import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nrzbhp09d.css';
import '../../css/s/s_sqn_0_b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="nrzbhp09d"/><path class="s_sqn_0_b"/></g>`,
		"fallback": "icon-park-outline:share-three",
	});
}

export default Component;
