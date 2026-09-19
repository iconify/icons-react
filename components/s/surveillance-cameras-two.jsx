import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sybgc7b4i.css';
import '../../css/c/cknlgy3-i.css';
import '../../css/r/riqeuzwro.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="sybgc7b4i"/><path class="cknlgy3-i"/><path class="riqeuzwro"/></g>`,
		"fallback": "icon-park:surveillance-cameras-two",
	});
}

export default Component;
