import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9vd3139t.css';
import '../../css/t/t0og0kqqi.css';
import '../../css/e/ed4mxccbx.css';
import '../../css/e/eqdr87b3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9vd3139t"/><path class="t0og0kqqi"/><path class="ed4mxccbx"/><path class="eqdr87b3l"/>`,
		"fallback": "energy-icons:server-x-20",
	});
}

export default Component;
