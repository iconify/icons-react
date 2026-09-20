import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hheg4_qjx.css';
import '../../css/u/umw-b_bys.css';
import '../../css/s/sz2_wis9c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hheg4_qjx"/><path class="umw-b_bys"/><path clip-rule="evenodd" class="sz2_wis9c"/></g>`,
		"fallback": "streamline-plump-color:recycle-bin-flat",
	});
}

export default Component;
