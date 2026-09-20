import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0qakpzvw.css';
import '../../css/m/mhn4ay1xq.css';
import '../../css/t/ty23m0b9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0qakpzvw"/><path class="mhn4ay1xq"/><path class="ty23m0b9o"/>`,
		"fallback": "selfhst:langfuse-dark",
	});
}

export default Component;
