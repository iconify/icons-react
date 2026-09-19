import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a77335b_u.css';
import '../../css/i/izhvc4evb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="a77335b_u"/><path class="izhvc4evb"/></g>`,
		"fallback": "icon-park:mediaeditor",
	});
}

export default Component;
