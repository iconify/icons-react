import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sr_tp8qip.css';
import '../../css/u/urubpty2c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sr_tp8qip"/><path class="urubpty2c"/></g>`,
		"fallback": "streamline-color:phone-mobile-phone-flat",
	});
}

export default Component;
