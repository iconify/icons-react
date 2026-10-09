import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0hhb404c.css';
import '../../css/x/xosj3nb8q.css';
import '../../css/a/aexj2ac1o.css';
import '../../css/p/pvxtckb7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0hhb404c"/><path class="xosj3nb8q"/><path class="aexj2ac1o"/><path class="pvxtckb7e"/>`,
		"fallback": "energy-icons:oil-rig-48-bold",
	});
}

export default Component;
