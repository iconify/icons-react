import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0zjmth0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0zjmth0p"/>`,
		"fallback": "game-icons:suspension-bridge",
	});
}

export default Component;
