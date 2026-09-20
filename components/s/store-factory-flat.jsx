import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qlzfazquq.css';
import '../../css/p/poc46_boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qlzfazquq"/><path class="poc46_boz"/></g>`,
		"fallback": "streamline-sharp-color:store-factory-flat",
	});
}

export default Component;
