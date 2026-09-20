import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hv-1zdbcz.css';
import '../../css/e/e3_bhabvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hv-1zdbcz"/><path class="e3_bhabvl"/></g>`,
		"fallback": "streamline-freehand:network-monitor-transfer-arrow-1",
	});
}

export default Component;
