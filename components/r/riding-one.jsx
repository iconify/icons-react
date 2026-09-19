import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/v/v_484qh6q.css';
import '../../css/l/l9r336bha.css';
import '../../css/d/dpkxoqb1h.css';
import '../../css/a/ass-a4axu.css';
import '../../css/y/ybb_z95sb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="v_484qh6q"/><path class="l9r336bha"/><path class="dpkxoqb1h"/><path class="ass-a4axu"/><path class="ybb_z95sb"/></g>`,
		"fallback": "icon-park:riding-one",
	});
}

export default Component;
