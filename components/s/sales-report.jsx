import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/za-9kdbrg.css';
import '../../css/x/xgzhx-b0o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="za-9kdbrg"/><path class="xgzhx-b0o"/></g>`,
		"fallback": "icon-park-outline:sales-report",
	});
}

export default Component;
