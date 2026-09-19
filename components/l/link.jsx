import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuipojbnc.css';
import '../../css/m/mxlj29bzq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuipojbnc"/><path class="mxlj29bzq"/>`,
		"fallback": "cil:link",
	});
}

export default Component;
