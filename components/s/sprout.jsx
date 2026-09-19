import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw5ulsk-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw5ulsk-r"/>`,
		"fallback": "game-icons:sprout",
	});
}

export default Component;
