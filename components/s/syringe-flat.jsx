import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yw9urccip.css';
import '../../css/z/z79rwbcsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yw9urccip"/><path class="z79rwbcsd"/></g>`,
		"fallback": "streamline-sharp-color:syringe-flat",
	});
}

export default Component;
