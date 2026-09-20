import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t60d83bwy.css';
import '../../css/m/m4h249kuv.css';
import '../../css/v/vesycdb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t60d83bwy"/><path class="m4h249kuv"/><path class="vesycdb4m"/></g>`,
		"fallback": "streamline-freehand:responsive-design-expand",
	});
}

export default Component;
