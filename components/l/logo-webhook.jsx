import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pjxpa7bda.css';
import '../../css/h/hb0tznocp.css';
import '../../css/i/inubnybbc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pjxpa7bda"/><path class="hb0tznocp"/><path class="inubnybbc"/></g>`,
		"fallback": "gravity-ui:logo-webhook",
	});
}

export default Component;
