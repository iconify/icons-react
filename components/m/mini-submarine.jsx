import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfav0twys.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfav0twys"/>`,
		"fallback": "game-icons:mini-submarine",
	});
}

export default Component;
