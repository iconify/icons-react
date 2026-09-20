import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nhnlupbxi.css';
import '../../css/j/jzri7wb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nhnlupbxi"/><path class="jzri7wb7b"/></g>`,
		"fallback": "streamline-freehand-color:phone-ring",
	});
}

export default Component;
