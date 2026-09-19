import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e47n3e20o.css';
import '../../css/q/q63gl3bnb.css';
import '../../css/i/i3g4ynr5b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e47n3e20o"/><path class="q63gl3bnb"/><path class="i3g4ynr5b"/></g>`,
		"fallback": "icon-park-solid:skate",
	});
}

export default Component;
