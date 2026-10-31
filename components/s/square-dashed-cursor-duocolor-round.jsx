import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u1cy98bkr.css';
import '../../css/s/sautgxbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u1cy98bkr"/><path class="sautgxbgs"/></g>`,
		"fallback": "coolicons:square-dashed-cursor-duocolor-round",
	});
}

export default Component;
