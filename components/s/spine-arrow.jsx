import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc9txne7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kc9txne7h"/>`,
		"fallback": "game-icons:spine-arrow",
	});
}

export default Component;
