import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/ddds83y6u.css';
import '../../css/v/vr8mcipvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="icon-tabler nrj6p8qat"><path class="ddds83y6u"/><path class="vr8mcipvg"/></g>`,
		"fallback": "tabler:skip-back",
	});
}

export default Component;
