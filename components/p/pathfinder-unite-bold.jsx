import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km9qluwhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="km9qluwhp"/>`,
		"fallback": "streamline-ultimate:pathfinder-unite-bold",
	});
}

export default Component;
