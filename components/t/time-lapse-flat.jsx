import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rhfeptotx.css';
import '../../css/o/obwtx-c8u.css';
import '../../css/v/vef42hohb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rhfeptotx"/><path class="obwtx-c8u"/><path class="vef42hohb"/></g>`,
		"fallback": "streamline-flex-color:time-lapse-flat",
	});
}

export default Component;
