import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkrl-8bgb.css';
import '../../css/g/g8ydabckk.css';
import '../../css/m/m35k5sbte.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkrl-8bgb"/><path class="g8ydabckk"/><path class="m35k5sbte"/>`,
		"fallback": "selfhst:postiz",
	});
}

export default Component;
