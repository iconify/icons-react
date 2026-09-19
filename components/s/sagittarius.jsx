import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p_db61b5d.css';
import '../../css/m/m3blmeb6r.css';
import '../../css/p/pra01zbms.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="p_db61b5d"/><path class="m3blmeb6r"/><path class="pra01zbms"/></g>`,
		"fallback": "icon-park:sagittarius",
	});
}

export default Component;
