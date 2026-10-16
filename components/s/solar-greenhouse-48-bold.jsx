import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_tc1dbfe.css';
import '../../css/w/w_6gb8bzx.css';
import '../../css/k/k5bzhg6-b.css';
import '../../css/q/qqdbsj5cp.css';
import '../../css/m/mc48jiv5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_tc1dbfe"/><path class="w_6gb8bzx"/><path class="k5bzhg6-b"/><path class="qqdbsj5cp"/><path class="mc48jiv5q"/>`,
		"fallback": "energy-icons:solar-greenhouse-48-bold",
	});
}

export default Component;
