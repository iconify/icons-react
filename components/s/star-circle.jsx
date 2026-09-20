import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/w97nzrxjq.css';
import '../../css/x/xsv_pubhl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="w97nzrxjq"/><path class="xsv_pubhl"/></g>`,
		"fallback": "streamline-plump:star-circle",
	});
}

export default Component;
