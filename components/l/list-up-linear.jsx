import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/utbx9q75k.css';
import '../../css/j/jv514ss1m.css';
import '../../css/r/rbjrgob2r.css';
import '../../css/q/qesyv5buv.css';
import '../../css/d/djbi_ub-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="utbx9q75k"/><path class="jv514ss1m"/><path class="rbjrgob2r"/><path class="qesyv5buv"/><path class="djbi_ub-i"/></g>`,
		"fallback": "solar:list-up-linear",
	});
}

export default Component;
