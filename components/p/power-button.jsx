import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zprx0jbqx.css';
import '../../css/a/a8-_pcc1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zprx0jbqx"/><path class="a8-_pcc1w"/></g>`,
		"fallback": "streamline-freehand:power-button",
	});
}

export default Component;
