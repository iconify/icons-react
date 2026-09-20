import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prfju3rsg.css';
import '../../css/t/tkzexgbcr.css';
import '../../css/v/vzfzj1r9k.css';
import '../../css/n/nw78ppbxz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="prfju3rsg"/><path class="tkzexgbcr"/><path class="vzfzj1r9k"/><path class="nw78ppbxz"/></g>`,
		"fallback": "streamline-flex-color:tag",
	});
}

export default Component;
