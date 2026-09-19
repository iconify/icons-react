import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrbckyotk.css';

const viewBox = {"width":675,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrbckyotk"/>`,
		"fallback": "ls:memo",
	});
}

export default Component;
