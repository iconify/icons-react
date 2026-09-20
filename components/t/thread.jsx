import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbau_7bzc.css';
import '../../css/b/bl8g9zklc.css';
import '../../css/w/w3xdlubnn.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/t/tssstib8b.css';
import '../../css/e/ejoz-jore.css';
import '../../css/k/k4avi2veo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbau_7bzc"/><path class="bl8g9zklc"/><path class="w3xdlubnn"/><g class="rpvb-o6bq"><path class="tssstib8b"/><path class="ejoz-jore"/><path class="k4avi2veo"/></g>`,
		"fallback": "openmoji:thread",
	});
}

export default Component;
