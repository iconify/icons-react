import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h9k__tb2a.css';
import '../../css/k/k7yfofbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h9k__tb2a"/><path class="k7yfofbst wm-a"/></g>`,
		"fallback": "withicons:pencil-ruler-solid",
	});
}

export default Component;
