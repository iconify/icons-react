import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khfjhpbne.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khfjhpbne"/>`,
		"fallback": "game-icons:sunken-eye",
	});
}

export default Component;
