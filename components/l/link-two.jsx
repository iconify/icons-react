import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/swwwjgg3w.css';
import '../../css/f/fi7_5bc1m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="swwwjgg3w"/><path class="fi7_5bc1m"/></g>`,
		"fallback": "icon-park:link-two",
	});
}

export default Component;
