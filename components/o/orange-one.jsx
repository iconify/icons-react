import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nw9s2ac_l.css';
import '../../css/l/lgx0jnb_q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="nw9s2ac_l"/><path class="lgx0jnb_q"/></g>`,
		"fallback": "icon-park-outline:orange-one",
	});
}

export default Component;
