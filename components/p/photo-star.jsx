import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w6-kncs9p.css';
import '../../css/h/h9nc3bcfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w6-kncs9p"/><path class="h9nc3bcfy"/></g>`,
		"fallback": "tabler:photo-star",
	});
}

export default Component;
