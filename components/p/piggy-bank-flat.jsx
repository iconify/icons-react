import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ud88avm3t.css';
import '../../css/m/m-25a40_i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ud88avm3t"/><path clip-rule="evenodd" class="m-25a40_i"/></g>`,
		"fallback": "streamline-plump-color:piggy-bank-flat",
	});
}

export default Component;
