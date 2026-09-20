import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iijygmybv.css';
import '../../css/c/c-2zdcfxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iijygmybv"/><path class="c-2zdcfxb"/></g>`,
		"fallback": "streamline-freehand-color:safety-exit-sign",
	});
}

export default Component;
