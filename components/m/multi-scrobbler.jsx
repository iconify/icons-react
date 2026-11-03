import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynsy5g-wh.css';
import '../../css/w/wjoeyx4qk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynsy5g-wh"/><path class="wjoeyx4qk"/>`,
		"fallback": "thesvg-color:multi-scrobbler",
	});
}

export default Component;
