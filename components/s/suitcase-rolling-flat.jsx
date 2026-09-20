import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cxb5acbfq.css';
import '../../css/p/pu--7xbjp.css';
import '../../css/c/c7s0occxu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cxb5acbfq"/><path class="pu--7xbjp"/><path class="c7s0occxu"/></g>`,
		"fallback": "streamline-flex-color:suitcase-rolling-flat",
	});
}

export default Component;
