import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6fb_actj.css';
import '../../css/r/rtr4tcjzi.css';
import '../../css/a/agvxs4kjq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6fb_actj"/><path class="rtr4tcjzi"/><path class="agvxs4kjq"/>`,
		"fallback": "energy-icons:solar-cell-48",
	});
}

export default Component;
