import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/biqtolbah.css';
import '../../css/o/onchvkbvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="biqtolbah"/><path class="onchvkbvh"/></g>`,
		"fallback": "streamline-plump-color:stock",
	});
}

export default Component;
