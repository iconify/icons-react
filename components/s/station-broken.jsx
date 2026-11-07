import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gg84aebsp.css';
import '../../css/y/y481nlytz.css';
import '../../css/u/um_27sbup.css';
import '../../css/j/jnepjhbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gg84aebsp"/><path class="y481nlytz"/><circle class="um_27sbup"/><path class="jnepjhbrg"/></g>`,
		"fallback": "solar:station-broken",
	});
}

export default Component;
