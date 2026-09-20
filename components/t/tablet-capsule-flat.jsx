import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzbxmkbbo.css';
import '../../css/o/oo_fw09kn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mzbxmkbbo"/><path class="oo_fw09kn"/></g>`,
		"fallback": "streamline-plump-color:tablet-capsule-flat",
	});
}

export default Component;
