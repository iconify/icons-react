import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-uw1xbbx.css';
import '../../css/d/d_xn5l81p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a-uw1xbbx"/><path class="d_xn5l81p"/></g>`,
		"fallback": "coolicons:list-ordered-duocolor-round",
	});
}

export default Component;
