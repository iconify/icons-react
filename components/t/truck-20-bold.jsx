import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyf71qdqm.css';
import '../../css/l/lrc8v1bwt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyf71qdqm"/><path class="lrc8v1bwt"/>`,
		"fallback": "energy-icons:truck-20-bold",
	});
}

export default Component;
