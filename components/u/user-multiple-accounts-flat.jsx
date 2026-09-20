import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lo1dnac6c.css';
import '../../css/z/zp6ey7xyk.css';
import '../../css/s/sv6qal5dy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lo1dnac6c"/><path class="zp6ey7xyk"/><path class="sv6qal5dy"/></g>`,
		"fallback": "streamline-plump-color:user-multiple-accounts-flat",
	});
}

export default Component;
