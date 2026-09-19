import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hlfxyq82y.css';
import '../../css/j/j-vmlbcez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hlfxyq82y"/><path class="j-vmlbcez"/></g>`,
		"fallback": "basil:phone-out-outline",
	});
}

export default Component;
