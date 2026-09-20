import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fby2hu3_n.css';
import '../../css/s/ss7v6elbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fby2hu3_n"/><path class="ss7v6elbc"/></g>`,
		"fallback": "streamline-sharp-color:rate-stretch-tool-flat",
	});
}

export default Component;
