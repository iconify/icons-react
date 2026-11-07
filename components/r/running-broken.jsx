import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lk387obkc.css';
import '../../css/p/pek1alrpa.css';
import '../../css/i/i779b9bnc.css';
import '../../css/p/p_58s6ywe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lk387obkc"/><path class="pek1alrpa"/><path class="i779b9bnc"/><path class="p_58s6ywe"/></g>`,
		"fallback": "solar:running-broken",
	});
}

export default Component;
