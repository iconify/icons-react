import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v0f-l6bus.css';
import '../../css/n/n50o4psqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v0f-l6bus"/><path class="n50o4psqq"/></g>`,
		"fallback": "solar:map-arrow-square-outline",
	});
}

export default Component;
