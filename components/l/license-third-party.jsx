import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wrpzi992x.css';
import '../../css/n/nfmm6t1xt.css';
import '../../css/r/r_mrxrb9o.css';
import '../../css/d/ddsx15bya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wrpzi992x"/><path class="nfmm6t1xt"/><path class="r_mrxrb9o"/><path class="ddsx15bya"/></g>`,
		"fallback": "hugeicons:license-third-party",
	});
}

export default Component;
