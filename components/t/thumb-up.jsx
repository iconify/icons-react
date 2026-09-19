import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th2m307zq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th2m307zq"/>`,
		"fallback": "cil:thumb-up",
	});
}

export default Component;
