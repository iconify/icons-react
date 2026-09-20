import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p4v8b8imv.css';
import '../../css/r/rwfr1parg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p4v8b8imv"/><path class="rwfr1parg"/></g>`,
		"fallback": "streamline-plump-color:navigation-arrow-off-flat",
	});
}

export default Component;
