import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/eevpdwb2u.css';
import '../../css/b/b44_26g_c.css';
import '../../css/f/f-n5-i5di.css';
import '../../css/h/huoq1ig0o.css';
import '../../css/l/liqd7r13i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="eevpdwb2u"/><path class="b44_26g_c"/><path class="f-n5-i5di"/><path class="huoq1ig0o"/><path class="liqd7r13i"/></g>`,
		"fallback": "matita:lock",
	});
}

export default Component;
