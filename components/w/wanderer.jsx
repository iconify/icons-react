import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxwpwpbas.css';
import '../../css/d/dqt391b0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxwpwpbas"/><path class="dqt391b0n"/>`,
		"fallback": "selfhst:wanderer",
	});
}

export default Component;
