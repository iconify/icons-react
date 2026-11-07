import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
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
		"content": `<g class="ipq1z-bjh"><path class="p_ls0_vsw"/><path class="rbsce_beo"/></g>`,
		"fallback": "solar:notes-minimalistic-broken",
	});
}

export default Component;
