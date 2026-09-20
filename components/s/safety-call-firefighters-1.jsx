import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/ro7o76b0x.css';
import '../../css/b/bhb5ffbim.css';
import '../../css/e/eo77zm_ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ro7o76b0x"/><path class="bhb5ffbim"/><path class="eo77zm_ub"/></g>`,
		"fallback": "streamline-freehand-color:safety-call-firefighters-1",
	});
}

export default Component;
