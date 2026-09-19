import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omu70acdu.css';
import '../../css/x/x_6zwgo6p.css';
import '../../css/v/v23eax-8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omu70acdu"/><path class="x_6zwgo6p"/><path class="v23eax-8c"/>`,
		"fallback": "fxemoji:ladybeetle",
	});
}

export default Component;
