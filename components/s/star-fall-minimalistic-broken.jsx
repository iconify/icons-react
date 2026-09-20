import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ln7kjcc0u.css';
import '../../css/c/cd47i0m6c.css';
import '../../css/q/qoddae6qt.css';
import '../../css/d/d7doq45qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ln7kjcc0u"/><path class="cd47i0m6c"/><path class="qoddae6qt"/><path class="d7doq45qw"/></g>`,
		"fallback": "solar:star-fall-minimalistic-broken",
	});
}

export default Component;
