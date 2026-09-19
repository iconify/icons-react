import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxlqk9beh.css';
import '../../css/y/yo439s51q.css';
import '../../css/c/cs4v2ib4u.css';
import '../../css/u/uuoiwqtfb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fxlqk9beh"/><path class="yo439s51q"/><path class="cs4v2ib4u"/><path class="uuoiwqtfb"/></g>`,
		"fallback": "icon-park-solid:sapling",
	});
}

export default Component;
