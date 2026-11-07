import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qesyv5buv.css';
import '../../css/d/djbi_ub-i.css';
import '../../css/s/sqmdekbrs.css';
import '../../css/p/pre11cbbs.css';
import '../../css/q/qtz6yi5yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qesyv5buv"/><path class="djbi_ub-i"/><path class="sqmdekbrs"/><path class="pre11cbbs"/><path class="qtz6yi5yq"/></g>`,
		"fallback": "solar:playlist-broken",
	});
}

export default Component;
