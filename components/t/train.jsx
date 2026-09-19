import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/l0k6p_bik.css';
import '../../css/h/hq5m6k27d.css';
import '../../css/k/kq30l5gks.css';
import '../../css/e/ehc9m5bjx.css';
import '../../css/a/azdebnmhx.css';
import '../../css/j/jlf-tbbda.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="l0k6p_bik"/><path class="hq5m6k27d"/><path class="kq30l5gks"/><path class="ehc9m5bjx"/><path class="azdebnmhx"/><path class="jlf-tbbda"/></g>`,
		"fallback": "icon-park-outline:train",
	});
}

export default Component;
