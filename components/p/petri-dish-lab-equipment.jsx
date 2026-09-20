import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/m/med-e0bmk.css';
import '../../css/r/rwejt42eg.css';
import '../../css/e/epvftoboj.css';
import '../../css/k/kli63yb6u.css';
import '../../css/z/zpo_xlqbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="med-e0bmk"/><path class="rwejt42eg"/><path class="epvftoboj"/><path class="kli63yb6u"/><path class="zpo_xlqbt"/></g>`,
		"fallback": "streamline-sharp-color:petri-dish-lab-equipment",
	});
}

export default Component;
