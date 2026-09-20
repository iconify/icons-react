import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kywv5bbem.css';
import '../../css/y/ym9cb4bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kywv5bbem"/><path class="ym9cb4bqj"/></g>`,
		"fallback": "streamline-freehand:money-bag-dollar",
	});
}

export default Component;
