import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghzll71qg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghzll71qg"/>`,
		"fallback": "energy-icons:square-dashed-20-bold",
	});
}

export default Component;
