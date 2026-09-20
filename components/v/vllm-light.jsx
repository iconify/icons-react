import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9nw32blw.css';
import '../../css/m/m2a5m1fuf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9nw32blw"/><path class="m2a5m1fuf"/>`,
		"fallback": "selfhst:vllm-light",
	});
}

export default Component;
