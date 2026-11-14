import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oirotweno.css';
import '../../css/d/d9fwxhphv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oirotweno"/><path class="d9fwxhphv"/>`,
		"fallback": "selfhst:pi-hole-dark",
	});
}

export default Component;
