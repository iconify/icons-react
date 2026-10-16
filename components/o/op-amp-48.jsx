import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhwncubtu.css';
import '../../css/m/mzeowwbud.css';
import '../../css/o/o78n4201q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhwncubtu"/><path class="mzeowwbud"/><path class="o78n4201q"/>`,
		"fallback": "energy-icons:op-amp-48",
	});
}

export default Component;
