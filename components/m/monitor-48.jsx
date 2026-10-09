import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xszfmab4u.css';
import '../../css/e/ezx2ctbsk.css';
import '../../css/n/nh3pp-bwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xszfmab4u"/><path class="ezx2ctbsk"/><path class="nh3pp-bwc"/>`,
		"fallback": "energy-icons:monitor-48",
	});
}

export default Component;
