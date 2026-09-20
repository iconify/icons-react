import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/q/q6_svfe6y.css';
import '../../css/a/a2iqvacfx.css';
import '../../css/e/e2fb2x87h.css';
import '../../css/a/a8x_6tbha.css';
import '../../css/h/hqrl9n_nr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="q6_svfe6y"/><path class="a2iqvacfx"/><path class="e2fb2x87h"/><path class="a8x_6tbha"/><path class="hqrl9n_nr"/></g>`,
		"fallback": "streamline-kameleon-color:service-bell",
	});
}

export default Component;
