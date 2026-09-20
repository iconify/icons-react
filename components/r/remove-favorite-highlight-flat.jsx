import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dmb662btr.css';
import '../../css/z/ziko39bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dmb662btr"/><path class="ziko39bpv"/></g>`,
		"fallback": "streamline-sharp-color:remove-favorite-highlight-flat",
	});
}

export default Component;
