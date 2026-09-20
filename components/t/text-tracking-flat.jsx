import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qcd3h3k6l.css';
import '../../css/p/p15hc5bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qcd3h3k6l"/><path class="p15hc5bcp"/></g>`,
		"fallback": "streamline-sharp-color:text-tracking-flat",
	});
}

export default Component;
