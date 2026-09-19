import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7y5r_amo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7y5r_amo"/>`,
		"fallback": "game-icons:manual-water-pump",
	});
}

export default Component;
