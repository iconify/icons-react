import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w04sejcqd.css';
import '../../css/s/s_xkkcbkt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w04sejcqd"/><path class="s_xkkcbkt"/>`,
		"fallback": "carbon:text-scale",
	});
}

export default Component;
