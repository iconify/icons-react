import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/trqunnbmt.css';
import '../../css/h/h016zykbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="trqunnbmt"/><path class="h016zykbg"/></g>`,
		"fallback": "coolicons:mosque-duocolor-round",
	});
}

export default Component;
