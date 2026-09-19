import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhi296bpc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhi296bpc"/>`,
		"fallback": "game-icons:parachute",
	});
}

export default Component;
