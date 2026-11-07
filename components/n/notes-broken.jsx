import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dnl23qbfb.css';
import '../../css/z/ze1h1pq4k.css';
import '../../css/p/p_ls0_vsw.css';
import '../../css/r/rbsce_beo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dnl23qbfb"/><path class="ze1h1pq4k"/><path class="p_ls0_vsw"/><path class="rbsce_beo"/></g>`,
		"fallback": "solar:notes-broken",
	});
}

export default Component;
