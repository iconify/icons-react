import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc46r_4jg.css';
import '../../css/r/r0a92247z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc46r_4jg"/><path class="r0a92247z"/>`,
		"fallback": "cil:scrubber",
	});
}

export default Component;
