import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouu8vhbvn.css';
import '../../css/b/bfqlh8bxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ouu8vhbvn"/><path class="bfqlh8bxi"/></g>`,
		"fallback": "streamline-plump-color:user-switch-account-flat",
	});
}

export default Component;
