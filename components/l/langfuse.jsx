import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq6qj3b9f.css';
import '../../css/g/g0pwxi3zt.css';
import '../../css/t/ty23m0b9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq6qj3b9f"/><path class="g0pwxi3zt"/><path class="ty23m0b9o"/>`,
		"fallback": "selfhst:langfuse",
	});
}

export default Component;
