import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klvi3bcrf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klvi3bcrf"/>`,
		"fallback": "game-icons:spikes-init",
	});
}

export default Component;
