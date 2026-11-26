import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gfviasbeq.css';
import '../../css/r/rw_49bc9t.css';
import '../../css/r/rnzft6b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gfviasbeq"/><path class="rw_49bc9t"/><path class="rnzft6b1v"/></g>`,
		"fallback": "lucide:message-circle-reply",
	});
}

export default Component;
