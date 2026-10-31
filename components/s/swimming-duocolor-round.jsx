import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rys98qb6q.css';
import '../../css/x/xa4_09bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rys98qb6q"/><path class="xa4_09bid"/></g>`,
		"fallback": "coolicons:swimming-duocolor-round",
	});
}

export default Component;
