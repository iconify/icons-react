import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8tkshbnt.css';
import '../../css/q/q1adlm-oz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8tkshbnt"/><path class="q1adlm-oz"/>`,
		"fallback": "selfhst:music-assistant",
	});
}

export default Component;
