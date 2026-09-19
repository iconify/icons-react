import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qei96bb8o.css';
import '../../css/i/iqbg9y7hc.css';
import '../../css/b/b9vlvsb-b.css';
import '../../css/l/lddjdbcnq.css';
import '../../css/v/v1j0rwb7r.css';
import '../../css/s/szxn1ac-n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qei96bb8o"/><path class="iqbg9y7hc"/><path class="b9vlvsb-b"/><path class="lddjdbcnq"/><path class="v1j0rwb7r"/><path class="szxn1ac-n"/></g>`,
		"fallback": "fluent-emoji-flat:love-hotel",
	});
}

export default Component;
