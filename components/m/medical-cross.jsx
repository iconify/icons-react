import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1nh42b4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1nh42b4z"/>`,
		"fallback": "cil:medical-cross",
	});
}

export default Component;
