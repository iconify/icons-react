import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pr2f-uj9i.css';
import '../../css/q/q32w2msyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pr2f-uj9i"/><path class="q32w2msyr"/></g>`,
		"fallback": "withicons:plus-sketch",
	});
}

export default Component;
