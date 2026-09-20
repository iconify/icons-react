import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xtf23m7og.css';
import '../../css/n/n4nddbcfo.css';
import '../../css/v/vrh1azbxe.css';
import '../../css/d/dkk21mj1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xtf23m7og"/><path class="n4nddbcfo"/><path class="vrh1azbxe"/><path class="dkk21mj1n"/></g>`,
		"fallback": "solar:smartphone-vibration-broken",
	});
}

export default Component;
