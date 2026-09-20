import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw37gnbno.css';
import '../../css/l/lan_z0x-a.css';
import '../../css/a/aqcce2f6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xw37gnbno"/><path class="lan_z0x-a"/><circle class="aqcce2f6r"/></g>`,
		"fallback": "proicons:lock-open",
	});
}

export default Component;
