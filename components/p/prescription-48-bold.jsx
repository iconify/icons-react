import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_pz3rxhk.css';
import '../../css/x/xgxu7gbrz.css';
import '../../css/o/o0njx073q.css';
import '../../css/d/d3ex0zbdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_pz3rxhk"/><path class="xgxu7gbrz"/><path class="o0njx073q"/><path class="d3ex0zbdm"/>`,
		"fallback": "energy-icons:prescription-48-bold",
	});
}

export default Component;
