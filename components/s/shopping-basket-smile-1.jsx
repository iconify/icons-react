import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fxk438bke.css';
import '../../css/b/b_oti3r0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fxk438bke"/><path class="b_oti3r0o"/></g>`,
		"fallback": "streamline-freehand:shopping-basket-smile-1",
	});
}

export default Component;
