import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k_g84_t5t.css';
import '../../css/v/vwh3d0bgz.css';
import '../../css/k/kob93y2la.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="k_g84_t5t"/><path class="vwh3d0bgz"/><path class="kob93y2la"/></g>`,
		"fallback": "marketeq:router-4",
	});
}

export default Component;
