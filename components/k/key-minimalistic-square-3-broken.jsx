import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/ruaapyb8f.css';
import '../../css/n/noxj16s0k.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ruaapyb8f"/><path class="noxj16s0k"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:key-minimalistic-square-3-broken",
	});
}

export default Component;
