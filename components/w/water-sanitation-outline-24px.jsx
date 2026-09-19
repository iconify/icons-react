import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1cp3g5it.css';
import '../../css/f/f13obgbqn.css';
import '../../css/z/z9l62k4ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n1cp3g5it"/><path class="f13obgbqn"/><path clip-rule="evenodd" class="z9l62k4ox"/></g>`,
		"fallback": "healthicons:water-sanitation-outline-24px",
	});
}

export default Component;
