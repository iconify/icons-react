import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/ti0xd567a.css';
import '../../css/o/o88jarcsv.css';
import '../../css/d/damw3ub_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ti0xd567a"/><path class="o88jarcsv"/><path class="damw3ub_t"/></g>`,
		"fallback": "streamline-freehand:tag-hot-price",
	});
}

export default Component;
