import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bun4fvbdj.css';
import '../../css/u/uqjvq3bgx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bun4fvbdj"/><path class="uqjvq3bgx"/>`,
		"fallback": "selfhst:scanopy",
	});
}

export default Component;
