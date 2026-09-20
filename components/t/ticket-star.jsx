import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/q1cp6abjp.css';
import '../../css/h/hh53wq2-j.css';
import '../../css/a/ad-zj5byh.css';
import '../../css/h/h5i1cwb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="q1cp6abjp"/><path class="hh53wq2-j"/><path class="ad-zj5byh"/><path class="h5i1cwb2h"/></g>`,
		"fallback": "streamline-sharp-color:ticket-star",
	});
}

export default Component;
