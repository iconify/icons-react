import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0u_vcc-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0u_vcc-l"/>`,
		"fallback": "game-icons:solar-system",
	});
}

export default Component;
