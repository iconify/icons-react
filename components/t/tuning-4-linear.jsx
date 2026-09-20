import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/o/o9b-osuxb.css';
import '../../css/n/np1e_hbeg.css';
import '../../css/m/m--2_4b9i.css';
import '../../css/c/c132ob09n.css';
import '../../css/k/k1zry6b1k.css';
import '../../css/p/pmm8k_1gb.css';
import '../../css/d/djqcecb9b.css';
import '../../css/l/ll27y-b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle transform="rotate(-90 12 12)" class="h_tsn8bxt"/><circle transform="rotate(-90 10 20)" class="o9b-osuxb"/><circle transform="matrix(0 -1 -1 0 16 6)" class="np1e_hbeg"/><path class="m--2_4b9i"/><path class="c132ob09n"/><path class="k1zry6b1k"/><path class="pmm8k_1gb"/><path class="djqcecb9b"/><path class="ll27y-b5e"/></g>`,
		"fallback": "solar:tuning-4-linear",
	});
}

export default Component;
