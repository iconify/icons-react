import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a8neukw-z.css';
import '../../css/a/ab350_zld.css';
import '../../css/x/x3z2s0btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="a8neukw-z"/><path class="ab350_zld"/><path class="x3z2s0btf"/></g>`,
		"fallback": "solar:user-check-broken",
	});
}

export default Component;
