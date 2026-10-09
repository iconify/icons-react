import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9czz4bal.css';
import '../../css/w/wm92jmbcq.css';
import '../../css/s/sptv1_b8r.css';
import '../../css/q/qmhwjfbmi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9czz4bal"/><path class="wm92jmbcq"/><path class="sptv1_b8r"/><path class="qmhwjfbmi"/>`,
		"fallback": "energy-icons:ventilation-48",
	});
}

export default Component;
