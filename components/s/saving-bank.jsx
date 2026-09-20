import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ovlvccufc.css';
import '../../css/f/ffatt8y0r.css';
import '../../css/u/ueks510uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ovlvccufc"/><path class="ffatt8y0r"/><path class="ueks510uc"/></g>`,
		"fallback": "streamline-freehand:saving-bank",
	});
}

export default Component;
