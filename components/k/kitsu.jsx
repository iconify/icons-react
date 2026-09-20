import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3fj33wpt.css';
import '../../css/i/ihm7jy0xh.css';
import '../../css/m/mzh_2zvez.css';
import '../../css/q/qbnjm1-8j.css';
import '../../css/k/kpd7u-cql.css';
import '../../css/r/rue2fbori.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3fj33wpt"/><path class="ihm7jy0xh"/><path class="mzh_2zvez"/><path class="qbnjm1-8j"/><path class="kpd7u-cql"/><path class="rue2fbori"/>`,
		"fallback": "selfhst:kitsu",
	});
}

export default Component;
