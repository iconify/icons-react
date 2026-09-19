import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko_cibb2i.css';
import '../../css/b/bkhiprxmo.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko_cibb2i"/><path class="bkhiprxmo"/>`,
		"fallback": "foundation:save",
	});
}

export default Component;
