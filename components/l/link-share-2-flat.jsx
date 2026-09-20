import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/ml53kjbfg.css';
import '../../css/l/l4ei2d6bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ml53kjbfg"/><path class="l4ei2d6bi"/></g>`,
		"fallback": "streamline-sharp-color:link-share-2-flat",
	});
}

export default Component;
