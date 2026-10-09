import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3ytnwbhg.css';
import '../../css/o/o89w-k64d.css';
import '../../css/c/c9uy2uufm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3ytnwbhg"/><path class="o89w-k64d"/><path class="c9uy2uufm"/>`,
		"fallback": "energy-icons:solar-tile-20-bold",
	});
}

export default Component;
