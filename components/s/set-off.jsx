import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/w/w-agk11jw.css';
import '../../css/w/w_2ad_hwq.css';
import '../../css/r/r00hp_bph.css';
import '../../css/b/bpjowqb8y.css';
import '../../css/l/lxqna7h7j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="w-agk11jw"/><path class="w_2ad_hwq"/><path class="r00hp_bph"/><path class="bpjowqb8y"/><rect transform="rotate(30 8.652 19.103)" class="lxqna7h7j"/></g>`,
		"fallback": "icon-park:set-off",
	});
}

export default Component;
