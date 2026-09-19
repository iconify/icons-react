import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/f/f967wlmua.css';
import '../../css/e/e3pn2bxuq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="f967wlmua"/><path class="e3pn2bxuq"/></g>`,
		"fallback": "icon-park:preview-open",
	});
}

export default Component;
