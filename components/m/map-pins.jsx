import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuv8jpbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuv8jpbdp"/>`,
		"fallback": "noviair:map-pins",
	});
}

export default Component;
