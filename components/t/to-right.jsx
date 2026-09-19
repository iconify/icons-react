import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/k3hwfxbku.css';
import '../../css/f/ff22yi0sg.css';
import '../../css/c/czea7sbrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="k3hwfxbku"/><path class="ff22yi0sg"/><path class="czea7sbrv"/></g>`,
		"fallback": "icon-park:to-right",
	});
}

export default Component;
