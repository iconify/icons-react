import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cdyb-8bvn.css';
import '../../css/v/ve0oupm9c.css';
import '../../css/t/tdc1jtcxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cdyb-8bvn"/><path class="ve0oupm9c"/><path class="tdc1jtcxs"/></g>`,
		"fallback": "streamline-freehand:money-wallet",
	});
}

export default Component;
