import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v8qiy8r0t.css';
import '../../css/i/ixasmrtvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v8qiy8r0t"/><path class="ixasmrtvr"/></g>`,
		"fallback": "streamline-sharp-color:tooth-flat",
	});
}

export default Component;
