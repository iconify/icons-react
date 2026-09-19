import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prdpuebmy.css';

const viewBox = {"width":1024,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prdpuebmy"/>`,
		"fallback": "fa:map-marker",
	});
}

export default Component;
