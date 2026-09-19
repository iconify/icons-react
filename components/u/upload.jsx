import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp_816eks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp_816eks"/>`,
		"fallback": "fa6-solid:upload",
	});
}

export default Component;
