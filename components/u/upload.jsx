import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu3_v0sqt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu3_v0sqt"/>`,
		"fallback": "radix-icons:upload",
	});
}

export default Component;
