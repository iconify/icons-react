import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nedbul91i.css';
import '../../css/l/lva3jac4i.css';
import '../../css/s/sk90skkxb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nedbul91i"/><path class="lva3jac4i"/><path clip-rule="evenodd" class="sk90skkxb"/></g>`,
		"fallback": "streamline-plump-color:receipt-cross-flat",
	});
}

export default Component;
