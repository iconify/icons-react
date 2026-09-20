import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zeu93pm1f.css';
import '../../css/h/hfjjhcb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zeu93pm1f"/><path class="hfjjhcb_c"/></g>`,
		"fallback": "streamline-freehand:module-building-blocks",
	});
}

export default Component;
