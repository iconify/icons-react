import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyt5f05aw.css';
import '../../css/k/k94_1vb5f.css';
import '../../css/w/wuiqsme6x.css';
import '../../css/q/qdd069bqr.css';
import '../../css/u/ug3toub-q.css';
import '../../css/e/e_hozrb3b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iyt5f05aw"/><path class="k94_1vb5f"/><path class="wuiqsme6x"/><path class="qdd069bqr"/><path class="ug3toub-q"/><path class="e_hozrb3b"/></g>`,
		"fallback": "fluent-emoji-flat:squid",
	});
}

export default Component;
