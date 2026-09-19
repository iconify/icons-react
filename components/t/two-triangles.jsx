import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wos-s-4gk.css';
import '../../css/r/rxfy9jprx.css';
import '../../css/h/h3hcrvkyu.css';
import '../../css/s/s4esdgbdl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wos-s-4gk"/><path class="rxfy9jprx"/><path class="h3hcrvkyu"/><path class="s4esdgbdl"/></g>`,
		"fallback": "icon-park:two-triangles",
	});
}

export default Component;
