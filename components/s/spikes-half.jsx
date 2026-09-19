import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia_ti1b7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia_ti1b7d"/>`,
		"fallback": "game-icons:spikes-half",
	});
}

export default Component;
