import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1pfkf74d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1pfkf74d"/>`,
		"fallback": "zondicons:location-restroom",
	});
}

export default Component;
