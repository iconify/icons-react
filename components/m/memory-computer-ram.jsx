import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kak25-ohq.css';
import '../../css/z/zz9ju6jal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kak25-ohq"/><path class="zz9ju6jal"/></g>`,
		"fallback": "streamline-freehand:memory-computer-ram",
	});
}

export default Component;
