import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/llfoxbcul.css';
import '../../css/q/q06y_ceai.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="llfoxbcul"/><path class="q06y_ceai"/></g>`,
		"fallback": "icon-park-outline:sd-card",
	});
}

export default Component;
