import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/o/ojvxlobwa.css';
import '../../css/q/qhatdibys.css';
import '../../css/s/s2p4zacxn.css';
import '../../css/o/oyh43sbch.css';
import '../../css/x/xv_9s9btw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="ojvxlobwa"/><path class="qhatdibys"/><path class="s2p4zacxn"/><path class="oyh43sbch"/><path class="xv_9s9btw"/></g>`,
		"fallback": "icon-park:start-time-sort",
	});
}

export default Component;
