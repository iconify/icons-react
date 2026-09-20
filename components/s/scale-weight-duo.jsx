import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvfectegd.css';
import '../../css/u/un__2s_sa.css';
import '../../css/w/wk4_54bmt.css';
import '../../css/n/ny_efzbcr.css';
import '../../css/w/wmn_wg91v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fvfectegd"/><path class="un__2s_sa"/><path class="wk4_54bmt"/><path class="ny_efzbcr"/><path class="wmn_wg91v"/></g>`,
		"fallback": "streamline-kameleon-color:scale-weight-duo",
	});
}

export default Component;
