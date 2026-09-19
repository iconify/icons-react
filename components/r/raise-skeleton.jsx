import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poe4enb4f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poe4enb4f"/>`,
		"fallback": "game-icons:raise-skeleton",
	});
}

export default Component;
