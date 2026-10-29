import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g7do6rtrq.css';
import '../../css/e/epvvq5buv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g7do6rtrq"/><path class="epvvq5buv"/></g>`,
		"fallback": "withicons:plane-sketch",
	});
}

export default Component;
