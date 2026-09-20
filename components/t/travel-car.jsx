import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfi9q604p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfi9q604p"/>`,
		"fallback": "zondicons:travel-car",
	});
}

export default Component;
