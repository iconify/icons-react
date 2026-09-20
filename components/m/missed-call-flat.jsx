import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xv5ras95o.css';
import '../../css/x/xnm5h2bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xv5ras95o"/><path class="xnm5h2bzp"/></g>`,
		"fallback": "streamline-sharp-color:missed-call-flat",
	});
}

export default Component;
