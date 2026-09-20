import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qji5yuk-j.css';
import '../../css/a/a2s7_xbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qji5yuk-j"/><path class="a2s7_xbxh"/></g>`,
		"fallback": "streamline-freehand:shopping-bag-no-plastic",
	});
}

export default Component;
