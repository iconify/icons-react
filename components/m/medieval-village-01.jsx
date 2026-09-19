import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9k_imbqr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9k_imbqr"/>`,
		"fallback": "game-icons:medieval-village-01",
	});
}

export default Component;
