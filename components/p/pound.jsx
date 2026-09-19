import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fqarnac2p.css';
import '../../css/t/ty0pkwo0e.css';
import '../../css/n/nsv2dr6tc.css';
import '../../css/x/xhx33fg5l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="fqarnac2p"/><path class="ty0pkwo0e"/><path class="nsv2dr6tc"/><path class="xhx33fg5l"/></g>`,
		"fallback": "icon-park:pound",
	});
}

export default Component;
