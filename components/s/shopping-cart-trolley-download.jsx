import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/osegdteac.css';
import '../../css/k/kvc_0pbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="osegdteac"/><path class="kvc_0pbam"/></g>`,
		"fallback": "streamline-freehand:shopping-cart-trolley-download",
	});
}

export default Component;
